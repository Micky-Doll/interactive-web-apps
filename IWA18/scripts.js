import { updateDragging, state, createOrderData, TABLES } from "./data.js";
import {
  html,
  createOrderHtml,
  updateDraggingHtml,
  moveToColumn,
} from "./view.js";

const handleDragStart = (event) => {
  const orderId = event.target.dataset.id;
  event.dataTransfer.setData("text/plain", orderId);
};

const handleDragOver = (event) => {
  event.preventDefault();
  const path = event.path || event.composedPath();
  let column = null;

  for (const element of path) {
    const { area } = element.dataset;
    if (area) {
      column = area;
      break;
    }
  }

  if (!column) return;

  updateDragging({ over: column });
  updateDraggingHtml({ over: column });
};

const handleHelpToggle = () => {
  html.help.overlay.open = !html.help.overlay.open;
};

const handleDragEnd = (event) => {
  event.preventDefault();
  updateDraggingHtml({ over: null });
  updateDragging({ over: null });

  const orderId = event.dataTransfer.getData("text/plain");
  const sourceColumn = state.dragging.source;
  const overColumn = state.dragging.over;

  if (sourceColumn !== overColumn) {
    moveToColumn(orderId, overColumn);

    state.orders[orderId].column = overColumn;
  }
};

const handleAddToggle = () => {
  html.add.overlay.open = true;
  html.add.title.value = "";
  html.add.table.value = TABLES[0]; // Set default table value
};

const handleAddCancel = () => {
  html.add.overlay.open = false;
};

const handleAddSubmit = (event) => {
  event.preventDefault();
  const title = html.add.title.value;
  const table = html.add.table.value;

  if (title && table) {
    const newOrder = createOrderData({ title, table, column: "ordered" });
    const orderHtml = createOrderHtml(newOrder);
    html.columns.ordered.appendChild(orderHtml);
    html.add.overlay.open = false;
  }
};

const handleEditToggle = (event) => {
  const orderId = event.target.dataset.id;
  const order = state.orders[orderId];

  html.edit.overlay.open = true;
  html.edit.title.value = order.title;
  html.edit.table.value = order.table;
  html.edit.column.value = order.column;
  html.edit.id.value = orderId;
};

const handleDelete = () => {
  const orderId = html.edit.id.value;
  const orderHtml = document.querySelector(`[data-id="${orderId}"]`);
  orderHtml.remove();
  html.edit.overlay.open = false;
};

const handleEditSubmit = (event) => {
  event.preventDefault();
  const orderId = html.edit.id.value;
  const title = html.edit.title.value;
  const table = html.edit.table.value;
  const column = html.edit.column.value;

  const orderHtml = document.querySelector(`[data-id="${orderId}"]`);
  orderHtml.querySelector("[data-order-title]").innerText = title;
  orderHtml.querySelector("[data-order-table]").innerText = table;

  moveToColumn(orderId, column);
  html.edit.overlay.open = false;
};

html.add.cancel.addEventListener("click", handleAddCancel);
html.other.add.addEventListener("click", handleAddToggle);
html.add.form.addEventListener("submit", handleAddSubmit);

html.other.grid.addEventListener("click", handleEditToggle);
html.edit.cancel.addEventListener("click", handleEditCancel);
html.edit.form.addEventListener("submit", handleEditSubmit);
html.edit.delete.addEventListener("click", handleDelete);

html.help.cancel.addEventListener("click", handleHelpToggle);
html.other.help.addEventListener("click", handleHelpToggle);

for (const htmlColumn of Object.values(html.columns)) {
  htmlColumn.addEventListener("dragstart", handleDragStart);
}

for (const htmlArea of Object.values(html.area)) {
  htmlArea.addEventListener("dragover", handleDragOver);
}
