// عرض معرض الموديلات
const modelGallery = document.getElementById('modelGallery');
for (let i = 1; i <= 10; i++) {
    const img = document.createElement('img');
    img.src = `models/${i}.png`;
    img.alt = `موديل ${i}`;
    img.onclick = () => loadModel(i);
    img.classList.add('model-thumbnail');
    modelGallery.appendChild(img);
}

// تحميل الموديل المختار
function loadModel(modelNumber) {
    const curtain = document.getElementById('curtain');
    const imagePath = `models/${modelNumber}.png`;

    fetch(imagePath)
        .then((response) => {
            if (response.ok) {
                curtain.setAttribute('src', imagePath);
            } else {
                alert('الصورة المطلوبة غير موجودة!');
            }
        });
}

// تغيير الحجم
function changeScale() {
    const scale = document.getElementById('scaleSlider').value;
    const curtain = document.getElementById('curtain');
    curtain.setAttribute('scale', `${scale} ${scale} ${scale}`);
}

// تغيير الموقع
function changePosition(axis) {
    const value = document.getElementById(`position${axis.toUpperCase()}`).value;
    const curtain = document.getElementById('curtain');
    const position = curtain.getAttribute('position');
    position[axis] = parseFloat(value);
    curtain.setAttribute('position', position);
}

// تغيير الدوران
function changeRotation() {
    const rotationY = document.getElementById('rotationY').value;
    const curtain = document.getElementById('curtain');
    curtain.setAttribute('rotation', `0 ${rotationY} 0`);
}

// تطبيق اللون المخصص
function applyCustomColor() {
    const color = document.getElementById('colorPicker').value;
    const curtain = document.getElementById('curtain');
    curtain.setAttribute('material', `color: ${color}`);
}
