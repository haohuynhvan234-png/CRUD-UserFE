---
name: Kỹ thuật số Hiện đại
colors:
  surface: '#081425'
  surface-dim: '#081425'
  surface-bright: '#2f3a4c'
  surface-container-lowest: '#040e1f'
  surface-container-low: '#111c2d'
  surface-container: '#152031'
  surface-container-high: '#1f2a3c'
  surface-container-highest: '#2a3548'
  on-surface: '#d8e3fb'
  on-surface-variant: '#c7c4d7'
  inverse-surface: '#d8e3fb'
  inverse-on-surface: '#263143'
  outline: '#908fa0'
  outline-variant: '#464554'
  surface-tint: '#c0c1ff'
  primary: '#c0c1ff'
  on-primary: '#1000a9'
  primary-container: '#8083ff'
  on-primary-container: '#0d0096'
  inverse-primary: '#494bd6'
  secondary: '#bec6e0'
  on-secondary: '#283044'
  secondary-container: '#3f465c'
  on-secondary-container: '#adb4ce'
  tertiary: '#ffb783'
  on-tertiary: '#4f2500'
  tertiary-container: '#d97721'
  on-tertiary-container: '#452000'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#ffdcc5'
  tertiary-fixed-dim: '#ffb783'
  on-tertiary-fixed: '#301400'
  on-tertiary-fixed-variant: '#703700'
  background: '#081425'
  on-background: '#d8e3fb'
  surface-variant: '#2a3548'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  code-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  container-margin: 24px
  gutter: 16px
---

## Thương hiệu & Phong cách

Hệ thống thiết kế này tập trung vào tính chuyên nghiệp, độ tin cậy và hiệu suất tối ưu cho các công cụ dành cho lập trình viên. Phong cách chủ đạo là **Modern Corporate** kết hợp với **Minimalism**, ưu tiên không gian trắng và phân cấp thông tin rõ ràng để giảm tải nhận thức khi xử lý dữ liệu phức tạp.

Giao diện sử dụng các đường nét sắc sảo, bề mặt phẳng với chiều sâu tinh tế thông qua màu sắc hơn là hiệu ứng đổ bóng nặng nề. Cảm giác mang lại là một công cụ mạnh mẽ, chính xác và không có chi tiết thừa.

## Màu sắc

Hệ thống sử dụng bảng màu tối (Dark Mode) làm mặc định để giảm mỏi mắt cho lập trình viên. 

- **Primary (Indigo):** Sử dụng cho các hành động chính, trạng thái active và các điểm nhấn thương hiệu.
- **Secondary (Deep Slate):** Sử dụng cho các thành phần điều hướng và bề mặt container lớn.
- **Neutral:** Các sắc độ xám xanh được sử dụng để phân tách các vùng nội dung, bảng dữ liệu và văn bản.
- **Semantic Colors:** Emerald cho thành công, Rose cho lỗi, và Amber cho cảnh báo. Các màu này phải đảm bảo độ tương phản cao trên nền tối.

## Kiểu chữ

Hệ thống sử dụng **Inter** cho hầu hết các thành phần giao diện nhờ khả năng đọc tuyệt vời trên màn hình kỹ thuật số. Đối với các giá trị ID, mã code, hoặc thông số kỹ thuật, **JetBrains Mono** được sử dụng để tạo sự phân biệt rõ ràng và mang lại cảm giác kỹ thuật.

Các tiêu đề lớn (Headline-lg) trên di động nên được điều chỉnh xuống 24px để tránh tràn dòng. Luôn duy trì khoảng cách dòng (line-height) thoáng đãng để tối ưu hóa việc đọc quét dữ liệu.

## Bố cục & Khoảng cách

Hệ thống áp dụng lưới **Fluid Grid 12 cột** cho desktop và **4 cột** cho mobile. Khoảng cách dựa trên hệ số 4 (4px base unit).

- **Margins:** Sử dụng 24px cho lề ngoài trên desktop và 16px trên mobile.
- **Gutters:** Cố định ở mức 16px để giữ cho các bảng dữ liệu và thẻ (cards) không quá rời rạc.
- **Padding:** Các thẻ nội dung sử dụng padding 24px (lg) để tạo sự thông thoáng. Các hàng trong bảng dữ liệu sử dụng padding 12px (sm) để tối ưu mật độ thông tin.

## Cao độ & Chiều sâu

Trong môi trường dashboard tối, chúng ta không sử dụng đổ bóng (shadows) truyền thống mà thay bằng **Tonal Layers** (Phân lớp tông màu):

1. **Level 0 (Background):** Màu `#0f172a`.
2. **Level 1 (Card/Surface):** Màu `#1e293b`.
3. **Level 2 (Popovers/Modals):** Màu `#334155` với đường viền (border) mỏng 1px màu trắng với độ trong suốt 10% để tách biệt khỏi nền.

Kỹ thuật này giúp giao diện trông hiện đại, gọn gàng và không bị rối mắt bởi quá nhiều hiệu ứng giả lập vật lý.

## Hình khối

Hệ thống sử dụng bo góc **Soft (0.25rem)** để duy trì vẻ ngoài chuyên nghiệp và cấu trúc. 

- Các nút bấm và ô nhập liệu (inputs) sử dụng bo góc 4px.
- Các thẻ (cards) và container lớn có thể sử dụng bo góc 8px (rounded-lg) để tạo sự phân cấp rõ ràng hơn.
- Tránh sử dụng bo góc tròn hoàn toàn (pill) ngoại trừ các nhãn trạng thái (badges/chips) nhỏ.

## Thành phần (Components)

### 1. Thẻ (Cards)
Sử dụng nền Level 1, viền 1px (`slate-700`). Tiêu đề thẻ sử dụng `headline-sm`. Thẻ phải hỗ trợ trạng thái "hover" bằng cách tăng độ sáng của viền.

### 2. Bảng dữ liệu (Data Tables)
Thành phần quan trọng nhất. Tiêu đề cột sử dụng `label-caps` với màu chữ xám nhạt. Các hàng phân cách bằng đường kẻ mỏng. Mã ID và dữ liệu hệ thống phải dùng font `code-md`.

### 3. Nút bấm (Buttons)
- **Primary:** Nền Indigo, chữ trắng. Không có bóng.
- **Secondary:** Nền trong suốt, viền Slate, chữ Slate-200.
- **Ghost:** Chỉ hiện nền xám nhẹ khi hover.

### 4. Ô nhập liệu (Inputs)
Sử dụng nền đậm hơn một chút so với card, viền Slate. Khi focus, viền chuyển sang màu Indigo với một lớp glow mỏng 2px (indigo/30%).

### 5. Thông báo (Toasts)
Đặt ở góc trên bên phải hoặc dưới cùng chính giữa. Sử dụng màu trạng thái (Emerald, Rose, Amber) làm thanh chỉ thị nhỏ ở cạnh trái của Toast để báo hiệu loại thông báo mà không làm mất tập trung.

### 6. Trạng thái (Badges)
Kích thước nhỏ, sử dụng font `label-caps`. Màu nền của Badge nên có độ trong suốt 15% của màu trạng thái tương ứng để không quá rực rỡ.