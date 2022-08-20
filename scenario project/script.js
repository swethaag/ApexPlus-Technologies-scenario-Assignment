const btns = document.querySelectorAll("[data-target-tab]");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btns.forEach((btn) => btn.classList.remove("active"));

    const items = document.querySelectorAll(".item");

    items.forEach((item) => item.classList.remove("active"));
    btn.classList.add("active");
    document.querySelector(btn.dataset.targetTab).classList.add("active");
  });
});

//
let scenarioList = [];
let scenario = {};
scenario.name = "";
scenario.time = "";
scenario.vehicles = [];
scenario.numberOfVehicles = scenario.vehicles.length;
let vehicle = {};
vehicle.name = "";
vehicle.px = "";
vehicle.py = "";
vehicle.speed = 0;
vehicle.direction = "";
let scenarioList2 = [];

// window.addEventListener("load", () => {

const setItems = () => {
  localStorage.setItem("list", JSON.stringify(scenarioList));
};

function addScenario() {
  if (
    document.getElementById("scenarioName").value != "" &&
    document.getElementById("scenarioTime").value != ""
  ) {
    scenario.name = document.getElementById("scenarioName").value;
    scenario.time = document.getElementById("scenarioTime").value;
    scenarioList.push(scenario);
    setItems();
    document.getElementById("scenarioName").value = "";
    document.getElementById("scenarioTime").value = "";
  }

  let storedValues = JSON.parse(localStorage.getItem("list"));
  if (storedValues) {
    scenarioList2 = storedValues;
    console.log("getItems" + scenarioList2);
  }
  // Dropdown
  let select = document.querySelector(".scenario_select");
  let select_Add_vehicle = document.querySelector(
    ".scenario_select_add_vehicle"
  );
  let option1 = document.createElement("option");
  option1.innerHTML = scenario.name;
  option1.value = scenario.name;
  let option2 = document.createElement("option");
  option2.innerHTML = scenario.name;
  option2.value = scenario.name;

  select.appendChild(option1);
  select_Add_vehicle.appendChild(option2);

  // diplay
  let list = document.querySelector(".scenarioList");
  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td4 = document.createElement("td");
  let td5 = document.createElement("td");
  let td6 = document.createElement("td");
  let td7 = document.createElement("td");

  list.appendChild(tr).style.color = "white";
  scenarioList2.map((scen, index) => {
    td1.innerHTML = index + 1;
    td2.innerHTML = scen.name;
    td3.innerHTML = scen.time;
    td4.innerHTML = scen.numberOfVehicles;

    td5.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg"     fill="#fff" width="25" height="25" viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z"/></svg>
  `;
    td6.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg"  onclick="editbtn(this);" fill="#fff" width="25" height="25"  viewBox="0 0 512 512"><path d="M421.7 220.3L188.5 453.4L154.6 419.5L158.1 416H112C103.2 416 96 408.8 96 400V353.9L92.51 357.4C87.78 362.2 84.31 368 82.42 374.4L59.44 452.6L137.6 429.6C143.1 427.7 149.8 424.2 154.6 419.5L188.5 453.4C178.1 463.8 165.2 471.5 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L291.7 90.34L421.7 220.3zM492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L444.3 197.7L314.3 67.72L362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75z"/></svg> `;
    td7.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" onclick="delbtn(this) " fill="#fff" width="25" height="25" viewBox="0 0 448 512"><path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z"/></svg>`;

    // return (
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td7);
    // );
  });
}

const resetbtn = document.getElementById("resetValues");
resetbtn.addEventListener("click", () => {
  document.getElementById("scenarioName").value = "";
  document.getElementById("scenarioTime").value = "";
  console.log("reset");
});

function deleteAll() {
  if (window.confirm("Are you confirm to Delete All")) {
    document.getElementById("table").innerHTML = "";
    document.querySelector(".scenario_select").innerHTML = "";
    scenarioList.length = 0;
  } else {
    console.log("canceled");
  }

  console.log(scenarioList.length);
}
function redirecttoaddvehicle(el) {
  console.log("redirecttoaddvehicle()" + el);
  el.setAttribute("id", "addvehicle");
  el.data - target - tab("#addvehicle");
}

//

function editbtn(scer) {
  console.dir("edited" + scer);
}

function delbtn(scer) {
  let s = scer.parentNode.parentNode;
  s.parentNode.removeChild(s);
  document.querySelector(".scenario_select").removeChild(s);
  console.dir(scer);
}

// vehicle add
function addVehicle() {
  if (
    document.getElementById("vehicleName").value != "" &&
    document.getElementById("positionX").value != "" &&
    document.getElementById("positionY").value != "" &&
    document.getElementById("speed").value != "" &&
    document.getElementById("direction").value != ""
  ) {
    let vName = document.getElementById("vehicleName").value;
    let speed = document.getElementById("speed").value;
    let px = document.getElementById("positionX").value;
    let py = document.getElementById("positionY").value;
    // let vDirection = document.getElementById("direction").value;
    // let vDirection = document.getElementById("directionDpn").value;
    let vDirection =
      document.getElementById("directionDpn").options[
        document.getElementById("directionDpn").selectedIndex
      ].text;
    vehicle.name = vName;
    vehicle.px = px;
    vehicle.py = py;
    vehicle.speed = speed;
    vehicle.direction = vDirection;
    console.log("vDirection " + vDirection);
    console.log("vehicle " + vehicle);
    scenario.vehicles.push(vehicle);
    document.getElementById("vehicleName").value = "";
    document.getElementById("speed").value = "";
    document.getElementById("positionX").value = "";
    document.getElementById("positionY").value = "";
    document.getElementById("direction").value = "";

    // diplay
    let list = document.querySelector(".vehicleList");

    // for (let i = 0; i < scenarioList.length; i++) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td6 = document.createElement("td");
    let td7 = document.createElement("td");
    let td8 = document.createElement("td");

    list.appendChild(tr).style.color = "white";
    scenario.vehicles.map((vehicle, index) => {
      td1.innerHTML = index;
      td2.innerHTML = vehicle.name;
      td3.innerHTML = vehicle.px;
      td4.innerHTML = vehicle.py;
      td5.innerHTML = vehicle.speed;

      td6.innerHTML = vehicle.direction;
      td7.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg"  onclick="editbtn(this);" fill="#fff" width="25" height="25"  viewBox="0 0 512 512"><path d="M421.7 220.3L188.5 453.4L154.6 419.5L158.1 416H112C103.2 416 96 408.8 96 400V353.9L92.51 357.4C87.78 362.2 84.31 368 82.42 374.4L59.44 452.6L137.6 429.6C143.1 427.7 149.8 424.2 154.6 419.5L188.5 453.4C178.1 463.8 165.2 471.5 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L291.7 90.34L421.7 220.3zM492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L444.3 197.7L314.3 67.72L362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75z"/></svg> `;
      td8.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" onclick="vdelbtn(this) " fill="#fff" width="25" height="25" viewBox="0 0 448 512"><path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z"/></svg>`;

      console.dir(vehicle);
      console.log(td8);
      return (
        tr.appendChild(td1),
        tr.appendChild(td2),
        tr.appendChild(td3),
        tr.appendChild(td4),
        tr.appendChild(td5),
        tr.appendChild(td6),
        tr.appendChild(td7),
        tr.appendChild(td8)
      );
    });
  }
}

function vdelbtn(scer) {
  var s = scer.parentNode.parentNode;
  s.parentNode.removeChild(s);
}
