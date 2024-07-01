import { useEffect } from "react";

function useScrollSnap() {
  useEffect(() => {
    let isScrolling = false;
    let currentSectionIndex = 0;

    const sections = document.querySelectorAll(".section");
    const sectionCount = sections.length;

    const handleScroll = (deltaY) => {
      if (isScrolling) return;

      isScrolling = true;

      window.requestAnimationFrame(() => {
        if (deltaY > 0 && currentSectionIndex < sectionCount - 1) {
          sections[currentSectionIndex].classList.add("fade-out");
          currentSectionIndex++;
        } else if (deltaY < 0 && currentSectionIndex > 0) {
          sections[currentSectionIndex].classList.add("fade-out");
          currentSectionIndex--;
        }

        const targetSection = sections[currentSectionIndex];
        targetSection.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => {
          sections.forEach((section, index) => {
            if (index !== currentSectionIndex) {
              section.classList.remove("fade-out");
            }
          });
          isScrolling = false;
        }, 1000);
      });
    };

    const handleWheel = (event) => {
      event.preventDefault();

      const deltaY = event.deltaY;

      if (deltaY > 0 || deltaY < 0) {
        handleScroll(deltaY);
      }
    };

    const handleKeyDown = (event) => {
      if (event.repeat) return;

      if (event.key === "ArrowDown") {
        handleScroll(1);
      } else if (event.key === "ArrowUp") {
        handleScroll(-1);
      }
    };

    // // Set a timeout to automatically scroll the first section after 10 seconds
    // const autoScrollFirstSection = setTimeout(() => {
    //   const firstSection = document.getElementById("section1");
    //   if (firstSection && currentSectionIndex === 0) {
    //     handleScroll(1);
    //   }
    //   isScrolling = false;
    // }, 10000);

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      // clearTimeout(autoScrollFirstSection);
    };
  }, []);
}

export default useScrollSnap;
