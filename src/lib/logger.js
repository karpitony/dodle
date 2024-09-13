export function isDev() {
  return process.env.NODE_ENV === "development";
}

export function debug(...args) {
  if (isDev()) {
    console.log(...args);
  }
}
