
let activeIndex = 0;
let isAnimating = false;

const groups = document.querySelectorAll(".card-group");

function changeGroup(direction) {
    if (isAnimating) return;

    isAnimating = true;

    const nextIndex =
        (activeIndex + direction + groups.length) % groups.length;

    const currentGroup = groups[activeIndex];
    const nextGroup = groups[nextIndex];

    currentGroup.dataset.status =
        direction === 1 ? "after" : "before";

    nextGroup.dataset.status =
        direction === 1
        ? "becoming-active-from-before"
        : "becoming-active-from-after";

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            nextGroup.dataset.status = "active";
        });
    });

    setTimeout(() => {
        activeIndex = nextIndex;
        isAnimating = false;
    }, 850);
}

function handleLoveClick() {
    changeGroup(1);
}

function handleHateClick() {
    changeGroup(-1);
}