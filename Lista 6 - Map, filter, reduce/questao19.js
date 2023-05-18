const a = { a: "a", b: "b", c: "c" };

function possuiB(item) {
  const temB = Object.getOwnPropertyNames(item);

  if (temB.includes("b")) {
    console.log("Possui b");
  } else {
    console.log("Não possui B");
  }
}

possuiB(a);
