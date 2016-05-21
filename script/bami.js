/**
 * Created by DrBreakalot on 28/04/2016.
 */

var dragged;

function onDragOver(event) {
    if (event.target.id === "plate") {
        event.preventDefault();
    }
}

function onDragStart(event) {
    dragged = event.target;
}

function onDrop(event) {
    var toDrop = dragged.cloneNode(true);
    toDrop.style.position = 'absolute';
    event
    event.target.appendChild(toDrop);
    dragged = null;
}