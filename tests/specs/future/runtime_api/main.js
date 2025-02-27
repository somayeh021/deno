console.log("window is", globalThis.window);
console.log("Deno.Buffer is", Deno.Buffer);
console.log("Deno.close is", Deno.close);
console.log("Deno.copy is", Deno.copy);
console.log("Deno.File is", Deno.File);
console.log("Deno.fstat is", Deno.fstat);
console.log("Deno.fstatSync is", Deno.fstatSync);
console.log("Deno.ftruncate is", Deno.ftruncate);
console.log("Deno.ftruncateSync is", Deno.ftruncateSync);
console.log("Deno.flock is", Deno.flock);
console.log("Deno.flockSync is", Deno.flockSync);
console.log(
  "Deno.FsFile.prototype.rid is",
  Deno.openSync(import.meta.filename).rid,
);
console.log("Deno.funlock is", Deno.funlock);
console.log("Deno.funlockSync is", Deno.funlockSync);
console.log("Deno.iter is", Deno.iter);
console.log("Deno.iterSync is", Deno.iterSync);
console.log("Deno.metrics is", Deno.metrics);
console.log("Deno.readAll is", Deno.readAll);
console.log("Deno.readAllSync is", Deno.readAllSync);
console.log("Deno.read is", Deno.read);
console.log("Deno.readSync is", Deno.readSync);
console.log("Deno.resources is", Deno.resources);
console.log("Deno.seek is", Deno.seek);
console.log("Deno.seekSync is", Deno.seekSync);
console.log("Deno.shutdown is", Deno.shutdown);
console.log("Deno.writeAll is", Deno.writeAll);
console.log("Deno.writeAllSync is", Deno.writeAllSync);
console.log("Deno.write is", Deno.write);
console.log("Deno.writeSync is", Deno.writeSync);

self.close();
