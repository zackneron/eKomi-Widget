const parts = process.versions.node.split('.');

if (parts[0] < 14 || (parts[0] == 14 && parts[1] < 19)) {
  console.log("\x1b[40m\x1b[31m%s\x1b[0m", "Please install and use Node version >= 14.19");
  console.log("\x1b[40m\x1b[33m%s\x1b[0m", "Current Node version: " + process.versions.node);
  process.exit(1);
}
else {
  console.log("\x1b[40m\x1b[32m%s\x1b[0m", "Current Node version: " + process.versions.node);
}
