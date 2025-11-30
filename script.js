// 1. Định nghĩa dữ liệu chi tiết cho từng nguyên tố
const elementDetails = {
    // DOPAMINE (Vàng)
    "SET THE GOAL AND GET IT": { hormone: "DOPAMINE", type: "H/M", level: 5, details: "Cảm giác hoàn thành mục tiêu là nguồn Dopamine mạnh mẽ nhất, kích hoạt hệ thống khen thưởng và tạo động lực." },
    "SLEEP": { hormone: "DOPAMINE", type: "M", level: 4, details: "Giấc ngủ sâu giúp phục hồi và cân bằng hệ thống Dopamine. Ngủ đủ 7-9 tiếng là yếu tố then chốt." },
    "APPLE": { hormone: "DOPAMINE", type: "N", level: 3, details: "Chứa Quercetin và chất chống oxy hóa, hỗ trợ bảo vệ tế bào não sản xuất Dopamine." },
    "STRAWBERRY": { hormone: "DOPAMINE", type: "N", level: 2, details: "Giàu Vitamin C, hỗ trợ quá trình tổng hợp Dopamine." },
    "BANANA": { hormone: "DOPAMINE", type: "N", level: 1, details: "Chứa Tyrosine và Vitamin B6, tiền chất cần thiết cho quá trình sản xuất Dopamine." },

    // OXYTOCIN (Hồng)
    "HUG SOMEONE": { hormone: "OXYTOCIN", type: "M", level: 5, details: "Ôm hoặc tiếp xúc cơ thể (skin-to-skin) kích thích trực tiếp giải phóng Oxytocin, tăng cảm giác gắn kết và an toàn." },
    "MILK": { hormone: "OXYTOCIN", type: "N", level: 4, details: "Sữa và chế phẩm sữa cung cấp Magie và Vitamin D, hỗ trợ cân bằng nội tiết tố và sức khỏe thần kinh tổng thể." },
    "CAULIFLOWER": { hormone: "OXYTOCIN", type: "N", level: 3, details: "Giàu Choline, một chất dinh dưỡng quan trọng cho chức năng màng tế bào thần kinh, gián tiếp hỗ trợ Oxytocin." },
    "BEANS": { hormone: "OXYTOCIN", type: "N", level: 2, details: "Nguồn Magie và Axit Folic, quan trọng cho hệ thần kinh và nội tiết." },
    "CHIA SEEDS": { hormone: "OXYTOCIN", type: "N", level: 1, details: "Cung cấp Omega-3, hỗ trợ chức năng thần kinh chung." },

    // SEROTONIN (Xanh Lá)
    "MEDITATION": { hormone: "SEROTONIN", type: "M", level: 5, details: "Thiền định làm giảm cortisol, điều chỉnh hoạt động thần kinh và tăng cường cân bằng Serotonin theo thời gian." },
    "EGG": { hormone: "SEROTONIN", type: "N", level: 4, details: "Nguồn Tryptophan (tiền chất Serotonin) và Vitamin D. Rất hiệu quả để hỗ trợ Serotonin." },
    "GREEN VEGETABLES": { hormone: "SEROTONIN", type: "N", level: 3, details: "Giàu Folate và Vitamin B, cần thiết cho quá trình tổng hợp Serotonin." },
    "NUTS": { hormone: "SEROTONIN", type: "N", level: 2, details: "Cung cấp Tryptophan và chất béo lành mạnh, hỗ trợ sản xuất Serotonin." },
    "CHEESE": { hormone: "SEROTONIN", type: "N", level: 1, details: "Nguồn Tryptophan và Canxi, tác động hỗ trợ vừa phải." },

    // ENDORPHINS (Tím)
    "SPICY FOODS": { hormone: "ENDORPHINS", type: "N", level: 5, details: "Capsaicin trong thức ăn cay kích thích phản ứng giảm đau tự nhiên, buộc cơ thể giải phóng Endorphins mạnh mẽ." },
    "DARK CHOCOLATE": { hormone: "ENDORPHINS", type: "N", level: 4, details: "Chứa Phenylethylamine (PEA), có thể kích thích tâm trạng và giải phóng Endorphins nhẹ (chỉ sô cô la đen >70%)." },
    "STRETCHING": { hormone: "ENDORPHINS", type: "H", level: 3, details: "Tập thể dục cường độ nhẹ và kéo giãn cơ giúp cơ thể thư giãn, giảm căng thẳng và giải phóng Endorphins." },
    "ENTERTAINMENT": { hormone: "ENDORPHINS", type: "M", level: 2, details: "Các hoạt động giải trí (như xem phim, đọc sách) giúp giảm stress và gián tiếp kích hoạt Endorphins thông qua tiếng cười hoặc sự thư giãn." },
    "CREAM": { hormone: "ENDORPHINS", type: "N", level: 1, details: "Thức ăn ngon, giàu chất béo thường kích thích Endorphins nhẹ (hệ thống khen thưởng). Tác động tức thời, nhẹ." },
};

// Lấy các phần tử DOM
const modal = document.getElementById("elementModal");
const closeButton = document.querySelector(".close-button");
const elements = document.querySelectorAll(".element");
const modalTitle = document.getElementById("modal-title");
const modalHormoneType = document.getElementById("modal-hormone-type");
const modalDetails = document.getElementById("modal-details");
const modalImpactLevel = document.getElementById("modal-impact-level");

// Hàm hiển thị Modal
function showModal(elementName, details) {
    modalTitle.textContent = elementName;

    // Thiết lập loại hormone và màu sắc
    modalHormoneType.textContent = `Hormone: ${details.hormone} (Loại: ${details.type})`;
    modalHormoneType.className = `modal-hormone-type modal-hormone-${details.hormone.toLowerCase()}`;

    modalDetails.innerHTML = `<p>${details.details}</p>`;
    modalImpactLevel.textContent = details.level;

    modal.style.display = "block";
}

// Gán sự kiện click cho từng ô element
elements.forEach(element => {
    element.addEventListener('click', function() {
        // Lấy tên nguyên tố từ HTML và chuẩn hóa để tra cứu
        const elementName = this.querySelector(".name").textContent.trim().toUpperCase();

        if (elementDetails[elementName]) {
            showModal(elementName, elementDetails[elementName]);
        } else {
            alert(`Xin lỗi, dữ liệu chi tiết cho "${elementName}" hiện chưa có.`);
        }
    });
});

// Gán sự kiện đóng Modal
closeButton.addEventListener('click', function() {
    modal.style.display = "none";
});

// Đóng Modal khi click ra ngoài
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});