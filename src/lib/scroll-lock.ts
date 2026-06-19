let lockCount = 0;
let savedOverflow = "";
let savedPaddingRight = "";

export function lockScroll() {
  if (typeof window === "undefined") return;
  if (lockCount === 0) {
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    savedOverflow = document.body.style.overflow;
    savedPaddingRight = document.body.style.paddingRight;
    document.body.style.overflow = "hidden";
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`;
  }
  lockCount++;
}

export function unlockScroll() {
  if (typeof window === "undefined") return;
  if (lockCount <= 0) return;
  lockCount--;
  if (lockCount === 0) {
    document.body.style.overflow = savedOverflow;
    document.body.style.paddingRight = savedPaddingRight;
  }
}
