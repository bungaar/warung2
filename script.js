let cart = [];
let total = 0;

function addToCart(itemName, price) {
  cart.push({ itemName, price });
  total += price;
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartItems = document.getElementById("cart-items");
  const totalDisplay = document.getElementById("total");
  cartItems.innerHTML = "";
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.itemName} - Rp ${item.price.toLocaleString()}`;
    cartItems.appendChild(li);
  });
  totalDisplay.textContent = total.toLocaleString();
}

function printReceipt() {
    let receiptContent = `
    <html>
    <head>
      <title>Struk Pembelian</title>
      <style>
        body {
          font-family: 'Courier New', Courier, monospace;
          max-width: 400px;
          margin: 0 auto;
          padding: 20px;
          color: #333;
        }
        h1 {
          text-align: center;
          color: #ff6f00;
          margin-bottom: 5px;
        }
        .line {
          border-bottom: 2px dashed #ff6f00;
          margin: 10px 0;
        }
        .items {
          width: 100%;
          border-collapse: collapse;
        }
        .items th, .items td {
          padding: 6px 0;
          font-size: 14px;
        }
        .items th {
          text-align: left;
          border-bottom: 1px solid #ff6f00;
        }
        .items td.price {
          text-align: right;
        }
        .total {
          margin-top: 15px;
          font-weight: 700;
          font-size: 18px;
          text-align: right;
          color: #ff6f00;
        }
        .thankyou {
          text-align: center;
          margin-top: 25px;
          font-style: italic;
          color: #555;
        }
        @media print {
          body {
            margin: 0;
            box-shadow: none;
          }
          .print-button {
            display: none;
          }
        }
        .print-button {
          margin-top: 20px;
          padding: 10px 20px;
          background: #ff6f00;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          cursor: pointer;
        }
        .print-button:hover {
          background: #e65c00;
        }
      </style>
    </head>
    <body>
      <h1>Warung Makanan</h1>
      <div class="line"></div>
      <table class="items">
        <thead>
          <tr><th>Item</th><th>Harga</th></tr>
        </thead>
        <tbody>
          ${cart.map(item => `
            <tr>
              <td>${item.itemName}</td>
              <td class="price">Rp ${item.price.toLocaleString()}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
      <div class="line"></div>
      <div class="total">Total: Rp ${total.toLocaleString()}</div>
      <div class="thankyou">Terima kasih telah berbelanja!</div>
      <button class="print-button" onclick="window.print()">Cetak Struk</button>
    </body>
    </html>`;
  
    const printWindow = window.open('', '', 'width=400,height=600');
    printWindow.document.write(receiptContent);
    printWindow.document.close();
  }
  
