function getParentTile(window) {
  let currentTile = window.tile;
  while (currentTile.parent !== null) {
    currentTile = currentTile.parent;
  }

  return currentTile;
}

function getAllWindowsInTile(tile) {
  const windows = [];

  function helper(windows, currentTile) {
    for (window of currentTile.windows) {
      windows.push(window);
    }
    if (currentTile.tiles.length > 0) {
      for (tile of currentTile.tiles) {
        helper(windows, tile);
      }
    }
  }
  helper(windows, tile);
  return windows;
}

function raiseTiledWindows() {
  // This has a side effect of reversing, which actually what what we want here
  // because normally in stacking order (according to API docs) "later windows cover earlier ones"
  let stackingOrder = [...workspace.stackingOrder];

  let windowsInTile = getAllWindowsInTile(
    getParentTile(workspace.activeWindow),
  );

  for (window of stackingOrder) {
    if (windowsInTile.includes(window)) {
      workspace.raiseWindow(window);
    }
  }
}

workspace.windowActivated.connect((window) => {
  raiseTiledWindows();
});
