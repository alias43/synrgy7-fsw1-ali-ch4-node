// ===== Latihan 3 =====
// buat module untuk memanipulasi data (write & read)
const {readData, writeData} = require("./people.js")
writeData()
readData()

// ===== dummy note =====
// const { printData, printDataCustom} = require('./dummy')
// const os = require("os");
// const fs = require("fs");

// console.log(os.freemem())

// const data = fs.readFileSync('./dummy.txt', 'utf-8')
// console.log(data)

// fs.writeFileSync('./dummy.txt', 'EDITED!!!', 'utf-8')

// printData()
// printDataCustom('custom')

// fs.writeFile("./dummy2.txt", "EDITED!!! 25 APRIL", "utf-8", (err) => {
//   if (err) console.log("Error loading data");
// });

// fs.readFile("./dummy2.txt", "utf-8", (err, data) => {
//   console.log(data);
// });

// const person = {
//   name: Ali,
//   age: 24,
//   address: Earth,
// };

// fs.writeFile("./dummy3.txt", JSON.stringify(person), "utf-8", (err) => {
//   if (err) console.log("Error loading data");
// });

// fs.readFile("./dummy3.txt", "utf-8", (err, data) => {
//   const parsed = data;
//   console.log(parsed.name);
// });

// // ===== Latihan 1 =====
// const cube = require("./kubus");
// const prism = require("./prisma3");
// const cuboid = require("./balok");

// console.log("Volume kubus:", cube.cubeVolume(5));
// console.log("Luas Permukaan kubus:", cube.cubeSurfaceArea(5));

// // ===== Latihan 2 =====
// const volumeBalok = cuboid.cuboidVolume(5, 5, 5);
// fs.writeFileSync("./result.txt", volumeBalok.toString(), "utf-8");