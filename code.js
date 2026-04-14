figma.showUI(__html__, { width: 460, height: 72, title: "Space Palette" });

if (figma.currentPage.selection.length > 0) {
  figma.currentPage.selection.forEach(function(node) {
    node.setRelaunchData({ open: "" });
  });
}

figma.ui.onmessage = (msg) => {
  if (msg.type === "copied") {
    figma.notify(`${msg.label} copied — paste with Cmd+V`);
  }
  if (msg.type === "resize") {
    figma.ui.resize(msg.width, msg.height);
  }
};
