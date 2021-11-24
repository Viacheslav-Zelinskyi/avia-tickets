export const exportToJson = (data: any) => {
  const blob = new Blob([JSON.stringify(data)], { type: "text/json" });
  const a = document.createElement("a");

  a.download = "tickets.json";
  a.href = window.URL.createObjectURL(blob);

  const clickEvt = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
  });

  a.dispatchEvent(clickEvt);

  a.remove();
};

export const uploadJson = (data: any) => {
  const fileReader = new FileReader();
  const input = document.createElement("input");

  input.type = "file";
  input.click();

  input.onchange = (e: any) => {
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e: any) => {
      data(JSON.parse(e.target.result));
    };
  };

  input.remove();
};
