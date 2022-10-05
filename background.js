chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create(
    {
      title: "وبسایت حق فراموشن شدن",
      id: "rtbfWebsite",
    },
    () => chrome.runtime.lastError
  );
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  const { menuItemId } = info;

  if (menuItemId === "rtbfWebsite") {
    chrome.tabs.create({
      url: "http://rtbf.ir",
    });
  }
});
