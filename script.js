// 1. Định nghĩa dữ liệu chi tiết cho từng nguyên tố (Dựa trên thiết kế mới)
const elementDetails = {
    // DOPAMINE (Vàng)
    "SET THE GOAL AND DO IT": { hormone: "DOPAMIN", type: "M/P", level: 5, details: "Cảm giác hoàn thành mục tiêu là nguồn Dopamine mạnh mẽ nhất, kích hoạt hệ thống khen thưởng và tạo động lực." },
    "SLEEP": { hormone: "DOPAMIN", type: "M", level: 4, details: "Giấc ngủ sâu giúp phục hồi và cân bằng hệ thống Dopamine. Ngủ đủ 7-9 tiếng là yếu tố then chốt." },
    "BANANA": { hormone: "DOPAMIN", type: "F", level: 2, details: "Chứa Tyrosine và Vitamin B6, tiền chất cần thiết cho quá trình sản xuất Dopamine." },
    "APPLE": { hormone: "DOPAMIN", type: "F", level: 3, details: "Chứa Quercetin và chất chống oxy hóa, hỗ trợ bảo vệ tế bào não sản xuất Dopamine." },
    "STRAWBERRY": { hormone: "DOPAMIN", type: "F", level: 3, details: "Giàu Vitamin C, hỗ trợ quá trình tổng hợp Dopamine." },
    "GREEN VEGETABLES": { hormone: "DOPAMIN", type: "F", level: 3, details: "Cung cấp Folate và Vitamin B, cần thiết cho hệ thần kinh." },
    "AVOCADO (Dop)": { hormone: "DOPAMIN", type: "F", level: 2, details: "Chất béo lành mạnh và Vitamin B hỗ trợ chức năng não bộ." },

    // OXYTOCIN (Hồng)
    "HUG SOMEONE": { hormone: "OXYTOCIN", type: "M/P", level: 5, details: "Ôm hoặc tiếp xúc cơ thể (skin-to-skin) kích thích trực tiếp giải phóng Oxytocin, tăng cảm giác gắn kết và an toàn." },
    "MEET FRIENDS": { hormone: "OXYTOCIN", type: "M/P", level: 5, details: "Tương tác xã hội trực tiếp và củng cố mối quan hệ." },
    "LISTEN TO MUSIC": { hormone: "OXYTOCIN", type: "M", level: 4, details: "Âm nhạc giúp thư giãn, giảm stress và tăng cường cảm giác hạnh phúc xã hội." },
    "MILK": { hormone: "OXYTOCIN", type: "F", level: 4, details: "Cung cấp Magie và Vitamin D, hỗ trợ cân bằng nội tiết tố." },
    "APPLE (Oxy)": { hormone: "OXYTOCIN", type: "F", level: 3, details: "Hỗ trợ sức khỏe tổng thể, gián tiếp cân bằng Oxytocin." },
    "AVOCADO (Oxy)": { hormone: "OXYTOCIN", type: "F", level: 3, details: "Chất béo và vitamin giúp tăng cường chức năng thần kinh." },
    "GREEN TEA (Oxy)": { hormone: "OXYTOCIN", type: "F", level: 3, details: "L-Theanine giúp thư giãn, giảm căng thẳng." },
    "BEANS": { hormone: "OXYTOCIN", type: "F", level: 2, details: "Nguồn Magie và Axit Folic, quan trọng cho hệ nội tiết." },
    "TOMATO (Oxy)": { hormone: "OXYTOCIN", type: "F", level: 2, details: "Cung cấp vitamin và chất chống oxy hóa." },

    // SEROTONIN (Xanh Lá)
    "MEDITATION": { hormone: "SEROTONIN", type: "M/P", level: 5, details: "Thiền định làm giảm cortisol, điều chỉnh hoạt động thần kinh và tăng cường cân bằng Serotonin." },
    "SUNBATHING": { hormone: "SEROTONIN", type: "M/P", level: 5, details: "Ánh nắng mặt trời giúp tăng cường Vitamin D, hỗ trợ tổng hợp Serotonin." },
    "EXERCISE": { hormone: "SEROTONIN", type: "M/P", level: 5, details: "Tập thể dục nhịp điệu kích thích sản xuất Serotonin." },
    "EGG": { hormone: "SEROTONIN", type: "F", level: 4, details: "Nguồn Tryptophan (tiền chất Serotonin) và Vitamin D." },
    "GREEN TEA (Sero)": { hormone: "SEROTONIN", type: "F", level: 4, details: "L-Theanine trong trà xanh giúp tăng cảm giác thư giãn, hỗ trợ tâm trạng." },
    "SALMON": { hormone: "SEROTONIN", type: "F", level: 4, details: "Giàu Omega-3 và Vitamin D, cực kỳ quan trọng cho sức khỏe não bộ." },
    "SEEDS": { hormone: "SEROTONIN", type: "F", level: 4, details: "Cung cấp Tryptophan và Magie." },
    "VITAMINC": { hormone: "SEROTONIN", type: "F", level: 3, details: "Vitamin C là đồng yếu tố trong quá trình tổng hợp Serotonin." },
    "CAULIFLOWER": { hormone: "SEROTONIN", type: "F", level: 3, details: "Giàu Choline, hỗ trợ chức năng màng tế bào thần kinh." },
    "GREEN VEGETABLES (Sero)": { hormone: "SEROTONIN", type: "F", level: 3, details: "Giàu Folate và Vitamin B, cần thiết cho tổng hợp Serotonin." },
    "CHIA SEEDS": { hormone: "SEROTONIN", type: "F", level: 2, details: "Cung cấp Omega-3." },
    "TOMATO (Sero)": { hormone: "SEROTONIN", type: "F", level: 2, details: "Hỗ trợ chức năng thần kinh." },
    "TOFU": { hormone: "SEROTONIN", type: "F", level: 2, details: "Nguồn Tryptophan." },
    "AVOCADO (Sero)": { hormone: "SEROTONIN", type: "F", level: 2, details: "Chất béo lành mạnh." },

    // ENDORPHINS (Tím)
    "SPICY FOODS": { hormone: "ENDORPHINS", type: "F", level: 4, details: "Capsaicin trong thức ăn cay kích thích phản ứng giảm đau tự nhiên, buộc cơ thể giải phóng Endorphins." },
    "TAKE A COLD SHOWER": { hormone: "ENDORPHINS", type: "H", level: 4, details: "Sốc lạnh gây ra phản ứng giảm đau, giải phóng Endorphins." },
    "DARK CHOCOLATE": { hormone: "ENDORPHINS", type: "F", level: 4, details: "Chứa Phenylethylamine (PEA), có thể kích thích tâm trạng và giải phóng Endorphins nhẹ." },
    "STRETCHING": { hormone: "ENDORPHINS", type: "M", level: 3, details: "Kéo giãn cơ giúp cơ thể thư giãn, giảm căng thẳng và giải phóng Endorphins." },
    "CREAM": { hormone: "ENDORPHINS", type: "F", level: 3, details: "Thức ăn ngon, giàu chất béo kích thích Endorphins nhẹ (hệ thống khen thưởng)." },
    "GREEN VEGETABLES (Endo)": { hormone: "ENDORPHINS", type: "F", level: 3, details: "Dưỡng chất hỗ trợ tổng thể." },
    "PACKETS": { hormone: "ENDORPHINS", type: "F", level: 2, details: "Thực phẩm đóng gói có tác động tâm lý tích cực, liên quan đến tự thưởng." },
    "ENTERTAINMENT": { hormone: "ENDORPHINS", type: "M", level: 2, details: "Các hoạt động giải trí giúp giảm stress và gián tiếp kích hoạt Endorphins." },
};

// Lấy các phần tử DOM
const modal = document.getElementById("elementModal");
const closeButton = document.querySelector(".close-button");
// Lấy tất cả các ô element chính
const elements = document.querySelectorAll(".element");
const modalTitle = document.getElementById("modal-title");
const modalHormoneType = document.getElementById("modal-hormone-type");
const modalDetails = document.getElementById("modal-details");
const modalImpactLevel = document.getElementById("modal-impact-level");

// Hàm hiển thị Modal
function showModal(elementName, details) {
    modalTitle.textContent = elementName;
    
    // Lấy tên hormone và loại từ dữ liệu chi tiết
    let hormone = details.hormone;
    let type = details.type;
    let level = details.level;

    // Thiết lập loại hormone và màu sắc
    modalHormoneType.textContent = `Hormone: ${hormone} (Loại: ${type})`;
    modalHormoneType.className = `modal-hormone-type modal-hormone-${hormone.toLowerCase()}`;

    modalDetails.innerHTML = `<p>${details.details}</p>`;
    modalImpactLevel.textContent = level;

    modal.style.display = "block";
}

// Gán sự kiện click cho từng ô element
elements.forEach(element => {
    element.addEventListener('click', function() {
        // Lấy tên nguyên tố từ thuộc tính data-name (để xử lý các tên trùng lặp)
        const elementName = this.getAttribute('data-name').trim().toUpperCase();

        if (elementDetails[elementName]) {
            showModal(elementDetails[elementName].name || elementName, elementDetails[elementName]);
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
