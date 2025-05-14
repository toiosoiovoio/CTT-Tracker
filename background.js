// Create a context menu item
browser.contextMenus.create({
  id: "search-ctt",
  title: "Seguir objecto em ctt.pt",
  contexts: ["selection"]
});

// Add listener for context menu clicks
browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "search-ctt" && info.selectionText) {
    // Get the selected text
    const selectedText = info.selectionText.trim();
    
    // Create the URL with the selected text
    const url = `https://appserver.ctt.pt/CustomerArea/PublicArea_Detail?ObjectCodeInput=${selectedText}&SearchInput=${selectedText}`;
    
    // Open the URL in a new tab
    browser.tabs.create({ url: url });
  }
});
