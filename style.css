/* Thiết lập chung */
body {
    font-family: Arial, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #ffffff;
    color: #000000;
}

.main-title {
    font-size: 2.5em;
    font-weight: 900;
    margin-bottom: 50px;
}

/* --- Container Bảng (Bao gồm Trục Y và Lưới) --- */
.table-container {
    display: grid;
    /* 3 cột: Key Box (phụ), Trục Y, Lưới chính */
    grid-template-columns: 200px 30px auto; 
    grid-template-rows: auto 1fr; /* 2 hàng: Key box/Labels và Bảng chính */
    gap: 10px;
    width: 90%;
    max-width: 1200px;
}

/* Key Box (Phần chú thích hình tròn) */
.key-box {
    grid-column: 1;
    grid-row: 1;
    text-align: left;
    font-size: 0.7em;
    position: relative;
}
.key-box p { margin: 2px 0; }
.key-box .image-box {
    border: 3px solid black;
    width: 60px;
    height: 60px;
    position: absolute;
    top: 50px;
    left: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.key-box .inner-circle {
    width: 30px;
    height: 30px;
    border: 3px solid black;
    border-radius: 50%;
}
.key-box .key-function { position: absolute; top: 55px; left: 175px; }
.key-box .key-type { position: absolute; top: 5px; left: 175px; }
.key-box .key-image { position: absolute; top: 95px; left: 175px; }


/* Trục Y */
.y-axis-label {
    grid-column: 1;
    grid-row: 2;
    align-self: center;
    justify-self: center;
    transform: rotate(-90deg);
    white-space: nowrap;
    font-size: 0.8em;
    font-weight: bold;
}
.y-axis-numbers {
    grid-column: 2;
    grid-row: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
    font-size: 0.9em;
    font-weight: bold;
    padding-bottom: 25px; /* Căn chỉnh với hàng 1 (mức 6) */
}
.y-axis-numbers div {
    height: 70px; /* Bằng chiều cao hàng trong grid */
    line-height: 70px;
}


/* --- Lưới Hormone Chính --- */
.hormone-grid {
    grid-column: 3;
    grid-row: 2;
    display: grid;
    /* 12 cột cho các ô (thói quen/thức ăn) */
    grid-template-columns: repeat(12, 1fr); 
    /* 5 hàng cho mức độ 6->2, hàng 1 là mức 6, hàng 5 là mức 2 */
    grid-template-rows: repeat(5, 70px); 
    gap: 5px;
    align-items: end; /* Căn ô xuống đáy của mỗi cell */
    padding-bottom: 10px;
}

/* Kiểu dáng chung của Ô */
.element {
    border: 3px solid;
    padding: 5px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    box-sizing: border-box;
    font-size: 0.7em;
    font-weight: bold;
}

.element .name {
    margin: 0;
    line-height: 1.1;
    text-transform: uppercase;
}

.element .details {
    display: flex;
    justify-content: space-between;
    font-size: 0.9em;
}

/* Định dạng các ô nhỏ bên trong */
.element .details span {
    padding: 1px 3px;
    border: 1px solid;
    min-width: 15px;
    text-align: center;
}

/* --- Màu sắc và Đường viền (Colors) --- */

/* DOPAMIN (Vàng) */
.dopamin { border-color: #FFC000; }
.dopamin .details span { border-color: #FFC000; }
.dopamin-color { border: 3px solid #FFC000; }

/* OXYTOCIN (Đỏ/Hồng) */
.oxytocin { border-color: #F8CBAD; }
.oxytocin .details span { border-color: #F8CBAD; }
.oxytocin-color { border: 3px solid #F8CBAD; }

/* SEROTONIN (Xanh lá) */
.serotonin { border-color: #00B050; }
.serotonin .details span { border-color: #00B050; }
.serotonin-color { border: 3px solid #00B050; }

/* ENDORPHINS (Tím/Hồng đậm) */
.endorphins { border-color: #A020F0; } /* Tùy chỉnh màu tím */
.endorphins .details span { border-color: #A020F0; }
.endorphins-color { border: 3px solid #A020F0; }

/* --- Footer (Trục X và Legend) --- */
.legend-x {
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 1200px;
    align-items: flex-end;
}

.x-labels {
    display: flex;
    justify-content: space-between;
    width: 50%; /* Điều chỉnh để căn chỉnh theo các cột dưới cùng */
    margin-right: 5px;
    font-size: 0.9em;
    font-weight: bold;
}

.hormone-legend {
    display: flex;
    gap: 40px;
    margin-top: 20px;
}

.hormone-item {
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9em;
    font-weight: bold;
}
