## BASE Express Framework xây dựng bởi Hạt Bí

### Mô tả

Base Express Framework là một base được xây dựng bởi Hạt Bí, giúp bạn có thể dễ dàng khởi tạo một dự án ExpressJS với các thư viện phổ biến nhất hiện nay.

Base này bao gồm các thư viện như Nodemon, Morgan, Express Handlebar, Tailwindcss và Mongoose. Nó được thiết kế để giúp bạn tiết kiệm thời gian và công sức trong việc cấu hình ban đầu cho dự án ExpressJS của mình.

### Thư viện và tính năng

- Cấu hình sẵn **ExpressJS** với các thư viện phổ biến

- Sử dụng **Nodemon** để tự động cập nhật khi có thay đổi trong mã nguồn

- Sử dụng **Morgan** để ghi lại các yêu cầu HTTP

- Sử dụng **Express Handlebar** làm template engine

- Sử dụng **Tailwindcss** để tạo giao diện đẹp mắt

- Sử dụng **Mongoose** để kết nối với MongoDB

- Sử dụng **dotenv** để quản lý biến môi trường

### Phiên bản

- dotenv | v17.2.0

- express | v4.19.2

- express-handlebars | v7.1.3

- flowbite | v3.1.2

- mongoose | v8.5.0

- morgan | v1.10.0

- nodemon | v3.1.4

- vite | v7.0.5

### Yêu cầu hệ thống

- [Node JS phiên bản 20 hoặc cao hơn](https://nodejs.org)

- [NPM](https://www.npmjs.com) (được cài đặt cùng với Node JS)

- [MongoDB](https://www.mongodb.com) (nếu bạn muốn sử dụng Mongoose)

### Hướng dẫn cài đặt

- Clone repository này về máy tính của bạn:

```bash
git clone https://github.com/hatbi-online/base-express-framework.git
```

- Di chuyển vào thư mục dự án:

```bash
cd base-express-framework
```

- Khởi tạo lại git repository:

```bash
rm -rf .git
git init
git add .
git commit -m "Initial commit"
```

- Cài đặt các phụ thuộc:

```bash
npm install

# Hoặc sử dụng Yarn

yarn install
```

- Build Tailwind CSS:

```bash
npm run build

# Hoặc sử dụng Yarn

yarn build
```

- Tạo file `.env` từ file mẫu `.env.example`:

```bash
cp .env.example .env
```

- Chỉnh sửa file `.env` để cấu hình kết nối với MongoDB và các biến môi trường khác:

```env
DB_NAME=
PORT=
```

- Chạy ứng dụng:

```bash
npm serve

# Hoặc sử dụng Yarn
yarn serve
```

