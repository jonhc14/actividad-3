import React, { useState } from 'react';
import './App.css';

const products = [
  // Nike (5 productos)
  { id: 1, title: "Nike Air Max 90", brand: "Nike", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjnjg4tYxH8y_tHlz41A1cnPWNMYk8u094Gg&s", description: "Comodidad y estilo inconfundible.", price: 120 },
  { id: 2, title: "Nike Air Force 1", brand: "Nike", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPW4GSGLQ0lZPI0XE9KwV_DOnUW_-kKxGaug&s", description: "Icono de estilo clásico.", price: 110 },
  { id: 3, title: "Nike React Element 55", brand: "Nike", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOFnzeBg3blh55VwPAnC18s8Qz5Uyv-qS7zw&s", description: "Tecnología React para máxima comodidad.", price: 130 },
  { id: 4, title: "Nike Dunk Low Retro", brand: "Nike", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMW1vxaXbJxK505KPWBgq-1IPinvk-5Q6tZg&s", description: "Clásico reinventado para la calle.", price: 100 },
  { id: 5, title: "Nike Zoom Pegasus 39", brand: "Nike", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIEPbVVMOFVR5MbvXgnygZcWb2NmEYGMEUwg&s", description: "Para corredores que buscan rendimiento.", price: 125 },

  // Adidas (5 productos)
  { id: 6, title: "Adidas Ultraboost 22", brand: "Adidas", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzP8D0jXd3shcHfC0mE8Ncax8wsKNbgGcjyg&s", description: "La máxima energía en cada paso.", price: 180 },
  { id: 7, title: "Adidas Stan Smith", brand: "Adidas", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNLkeeaiSZD-6NGFZeU3CGGg8l3Uq_woK6rg&s", description: "Icono del tenis desde los 70s.", price: 85 },
  { id: 8, title: "Adidas NMD_R1", brand: "Adidas", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToBhzDlP4C1D2rChGuaIpsVKvk5g27Xrm0dw&s", description: "Estilo urbano con tecnología Boost.", price: 140 },
  { id: 9, title: "Adidas Superstar", brand: "Adidas", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsbaXIndmymlLtmchDQipL5R_DnD1jItawew&s", description: "Las clásicas con caparazón de serpiente.", price: 90 },
  { id: 10, title: "Adidas Gazelle", brand: "Adidas", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlfYQxG3kskMcIGJOZpSXf8pn8xZBQoiyOhg&s", description: "Retro inspirado en los 90s.", price: 95 },

  // Puma (5 productos)
  { id: 11, title: "Puma RS-X", brand: "Puma", image: "https://via.placeholder.com/150?text=Puma+RS-X", description: "Tecnología RS para máxima comodidad.", price: 110 },
  { id: 12, title: "Puma Suede Classic", brand: "Puma", image: "https://via.placeholder.com/150?text=Puma+Suede+Classic", description: "El clásico que nunca pasa de moda.", price: 75 },
  { id: 13, title: "Puma Future Rider", brand: "Puma", image: "https://via.placeholder.com/150?text=Puma+Future+Rider", description: "Inspirado en los 80s, diseñado para hoy.", price: 90 },
  { id: 14, title: "Puma Cali", brand: "Puma", image: "https://via.placeholder.com/150?text=Puma+Cali", description: "Estilo vintage con detalles modernos.", price: 95 },
  { id: 15, title: "Puma Mirage Sport", brand: "Puma", image: "https://via.placeholder.com/150?text=Puma+Mirage+Sport", description: "Deportivas con actitud callejera.", price: 85 },

  // Reebok (5 productos)
  { id: 16, title: "Reebok Classic Leather", brand: "Reebok", image: "https://via.placeholder.com/150?text=Reebok+Classic+Leather", description: "El legado continúa con este icono.", price: 80 },
  { id: 17, title: "Reebok Club C 85", brand: "Reebok", image: "https://via.placeholder.com/150?text=Reebok+Club+C+85", description: "Tenis vintage con estilo minimalista.", price: 90 },
  { id: 18, title: "Reebok Nano X1", brand: "Reebok", image: "https://via.placeholder.com/150?text=Reebok+Nano+X1", description: "Para entrenamientos de alto rendimiento.", price: 130 },
  { id: 19, title: "Reebok Zig Dynamica", brand: "Reebok", image: "https://via.placeholder.com/150?text=Reebok+Zig+Dynamica", description: "Tecnología Zig para máxima energía.", price: 110 },
  { id: 20, title: "Reebok Question Mid", brand: "Reebok", image: "https://via.placeholder.com/150?text=Reebok+Question+Mid", description: "El legado de Iverson en la cancha.", price: 120 }
];

// Logos de métodos de pago (puedes reemplazar con imágenes reales)
const paymentLogos = {
  'credit-card': '💳',
  'paypal': 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png',
  'transfer': '🏦',
  'bitcoin': 'https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg',
  'apple-pay': 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Apple_pay_logo.svg',
  'google-pay': 'https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Pay_%28GPay%29_Logo.svg',
  'amazon-pay': 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
};

function App() {
  const [search, setSearch] = useState('');
  const [cart, setCart] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    email: '',
    bitcoinAddress: '',
    phone: ''
  });
  const [step, setStep] = useState(1); // 1: carrito, 2: método pago, 3: info pago, 4: confirmación

  const handleSearch = (e) => setSearch(e.target.value.toLowerCase());

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleRemoveFromCart = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  const handlePaymentMethodSelect = (method) => {
    setPaymentMethod(method);
    setStep(3); // Ir a información de pago
  };

  const handlePaymentInfoChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({
      ...paymentInfo,
      [name]: value
    });
  };

  const handleSubmitPayment = (e) => {
    e.preventDefault();
    // Aquí normalmente harías una llamada a una API de pago
    setStep(4); // Ir a confirmación
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const filteredProducts = products.filter(product =>
    product.brand.toLowerCase().includes(search) || 
    product.title.toLowerCase().includes(search)
  );

  const resetCart = () => {
    setCart([]);
    setPaymentMethod('');
    setPaymentInfo({
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      email: '',
      bitcoinAddress: '',
      phone: ''
    });
    setStep(1);
  };

  const renderPaymentLogo = (method) => {
    if (typeof paymentLogos[method] === 'string' && paymentLogos[method].startsWith('http')) {
      return <img src={paymentLogos[method]} alt={method} className="payment-logo" />;
    }
    return <div className="payment-icon">{paymentLogos[method]}</div>;
  };

  return (
    <div className="App">
      <header className="app-header">
        <div className="logo-container">
          <img src="https://via.placeholder.com/150x50?text=Sneaker+Store" alt="" className="store-logo" />
        </div>
        <div className="search-container">
          <input 
            type="text"
            placeholder="Buscar por marca o modelo..."
            onChange={handleSearch}
            className="search-input"
          />
          <button className="cart-icon" onClick={() => setStep(1)}>
            🛒 {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
          </button>
        </div>
      </header>

      <main>
        {step === 1 && (
          <>
            <div className="product-list">
              {filteredProducts.map(product => (
                <div key={product.id} className="product-card">
                  <img src={product.image} alt={product.title} className="product-image" />
                  <div className="product-info">
                    <h3>{product.title}</h3>
                    <p className="product-brand">{product.brand}</p>
                    <p className="product-description">{product.description}</p>
                    <p className="product-price">${product.price.toFixed(2)}</p>
                    <button 
                      className="add-to-cart-btn"
                      onClick={() => handleAddToCart(product)}
                    >
                      Añadir al carrito
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {cart.length > 0 && (
              <div className="cart-sidebar">
                <h2>Tu Carrito</h2>
                <ul className="cart-items">
                  {cart.map(item => (
                    <li key={item.id} className="cart-item">
                      <img src={item.image} alt={item.title} className="cart-item-image" />
                      <div className="cart-item-details">
                        <span>{item.title}</span>
                        <span>${item.price.toFixed(2)}</span>
                      </div>
                      <button 
                        className="remove-item-btn"
                        onClick={() => handleRemoveFromCart(item.id)}
                      >
                        ×
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="cart-total">
                  <span>Total:</span>
                  <span>${calculateTotal()}</span>
                </div>
                <button 
                  className="checkout-btn"
                  onClick={() => setStep(2)}
                >
                  Proceder al pago
                </button>
              </div>
            )}
          </>
        )}

        {step === 2 && (
          <div className="payment-method-container">
            <h2>Selecciona método de pago</h2>
            <div className="payment-methods">
              <div className="payment-method" onClick={() => handlePaymentMethodSelect('credit-card')}>
                {renderPaymentLogo('credit-card')}
                <h3>Tarjeta de crédito/débito</h3>
                <p>Paga con tu tarjeta Visa, Mastercard o Amex</p>
              </div>
              <div className="payment-method" onClick={() => handlePaymentMethodSelect('paypal')}>
                {renderPaymentLogo('paypal')}
                <h3>PayPal</h3>
                <p>Paga rápida y seguramente con tu cuenta PayPal</p>
              </div>
              <div className="payment-method" onClick={() => handlePaymentMethodSelect('transfer')}>
                {renderPaymentLogo('transfer')}
                <h3>Transferencia bancaria</h3>
                <p>Transfiere el dinero directamente a nuestra cuenta</p>
              </div>
              <div className="payment-method" onClick={() => handlePaymentMethodSelect('bitcoin')}>
                {renderPaymentLogo('bitcoin')}
                <h3>Bitcoin</h3>
                <p>Paga con criptomonedas</p>
              </div>
              <div className="payment-method" onClick={() => handlePaymentMethodSelect('apple-pay')}>
                {renderPaymentLogo('apple-pay')}
                <h3>Apple Pay</h3>
                <p>Paga con tu dispositivo Apple</p>
              </div>
              <div className="payment-method" onClick={() => handlePaymentMethodSelect('google-pay')}>
                {renderPaymentLogo('google-pay')}
                <h3>Google Pay</h3>
                <p>Paga con tu cuenta de Google</p>
              </div>
              <div className="payment-method" onClick={() => handlePaymentMethodSelect('amazon-pay')}>
                {renderPaymentLogo('amazon-pay')}
                <h3>Amazon Pay</h3>
                <p>Usa tu cuenta de Amazon para pagar</p>
              </div>
            </div>
            <button className="back-btn" onClick={() => setStep(1)}>Volver al carrito</button>
          </div>
        )}

        {step === 3 && (
          <div className="payment-info-container">
            <h2>Información de pago</h2>
            <form onSubmit={handleSubmitPayment} className="payment-form">
              {paymentMethod === 'credit-card' && (
                <>
                  <div className="form-group">
                    <label>Número de tarjeta</label>
                    <input 
                      type="text" 
                      name="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      value={paymentInfo.cardNumber}
                      onChange={handlePaymentInfoChange}
                      required
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Fecha de expiración</label>
                      <input 
                        type="text" 
                        name="expiryDate"
                        placeholder="MM/AA"
                        value={paymentInfo.expiryDate}
                        onChange={handlePaymentInfoChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>CVV</label>
                      <input 
                        type="text" 
                        name="cvv"
                        placeholder="123"
                        value={paymentInfo.cvv}
                        onChange={handlePaymentInfoChange}
                        required
                      />
                    </div>
                  </div>
                </>
              )}
              
              {paymentMethod === 'paypal' && (
                <div className="form-group">
                  <label>Email de PayPal</label>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="tu@email.com"
                    value={paymentInfo.email}
                    onChange={handlePaymentInfoChange}
                    required
                  />
                </div>
              )}
              
              {paymentMethod === 'transfer' && (
                <div className="bank-info">
                  <p>Por favor realiza una transferencia a:</p>
                  <p><strong>Banco:</strong> Sneaker Bank</p>
                  <p><strong>Cuenta:</strong> 1234 5678 9012 3456</p>
                  <p><strong>Beneficiario:</strong> Sneaker Store SL</p>
                  <p><strong>Concepto:</strong> Compra #{Math.floor(Math.random() * 10000)}</p>
                </div>
              )}
              
              {paymentMethod === 'bitcoin' && (
                <div className="form-group">
                  <label>Dirección de Bitcoin</label>
                  <input 
                    type="text" 
                    name="bitcoinAddress"
                    placeholder="1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"
                    value={paymentInfo.bitcoinAddress}
                    onChange={handlePaymentInfoChange}
                    required
                  />
                  <p className="bitcoin-info">
                    Enviar exactamente {calculateTotal()} USD en BTC a la dirección proporcionada
                  </p>
                </div>
              )}
              
              {paymentMethod === 'apple-pay' && (
                <div className="form-group">
                  <label>Número de teléfono asociado a Apple Pay</label>
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="+1 234 567 890"
                    value={paymentInfo.phone}
                    onChange={handlePaymentInfoChange}
                    required
                  />
                </div>
              )}
              
              {paymentMethod === 'google-pay' && (
                <div className="form-group">
                  <label>Email asociado a Google Pay</label>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="tu@email.com"
                    value={paymentInfo.email}
                    onChange={handlePaymentInfoChange}
                    required
                  />
                </div>
              )}
              
              {paymentMethod === 'amazon-pay' && (
                <div className="form-group">
                  <label>Email asociado a Amazon Pay</label>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="tu@email.com"
                    value={paymentInfo.email}
                    onChange={handlePaymentInfoChange}
                    required
                  />
                </div>
              )}
              
              <div className="order-summary">
                <h3>Resumen del pedido</h3>
                <ul>
                  {cart.map(item => (
                    <li key={item.id}>
                      <span>{item.title}</span>
                      <span>${item.price.toFixed(2)}</span>
                    </li>
                  ))}
                </ul>
                <div className="order-total">
                  <span>Total:</span>
                  <span>${calculateTotal()}</span>
                </div>
              </div>
              
              <div className="form-actions">
                <button type="button" className="back-btn" onClick={() => setStep(2)}>Volver</button>
                <button type="submit" className="submit-payment-btn">
                  {paymentMethod === 'transfer' ? 'Confirmar pedido' : 'Pagar ahora'}
                </button>
              </div>
            </form>
          </div>
        )}
        
        {step === 4 && (
          <div className="confirmation-container">
            <div className="confirmation-card">
              <div className="confirmation-icon">✓</div>
              <h2>¡Pago completado con éxito!</h2>
              <p>Gracias por tu compra. Hemos enviado un correo con los detalles de tu pedido.</p>
              
              <div className="order-details">
                <h3>Detalles del pedido</h3>
                <p><strong>Número de pedido:</strong> #{Math.floor(Math.random() * 1000000)}</p>
                <p><strong>Fecha:</strong> {new Date().toLocaleDateString()}</p>
                <p><strong>Método de pago:</strong> 
                  {paymentMethod === 'credit-card' && ' Tarjeta de crédito/débito'}
                  {paymentMethod === 'paypal' && ' PayPal'}
                  {paymentMethod === 'transfer' && ' Transferencia bancaria'}
                  {paymentMethod === 'bitcoin' && ' Bitcoin'}
                  {paymentMethod === 'apple-pay' && ' Apple Pay'}
                  {paymentMethod === 'google-pay' && ' Google Pay'}
                  {paymentMethod === 'amazon-pay' && ' Amazon Pay'}
                </p>
                <p><strong>Total:</strong> ${calculateTotal()}</p>
                <p><strong>Fecha estimada de entrega:</strong> {new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString()}</p>
              </div>
              
              <button className="continue-shopping-btn" onClick={resetCart}>
                Continuar comprando
              </button>
            </div>
          </div>
        )}
      </main>
      
      <footer className="app-footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEawbFzS3XjFaTHX02bpBcl4U8nUzWEtgjnA&s" alt="Sneaker Store Logo" />
          </div>
          <div className="footer-info">
            <p>© 2023 Sneaker Store - Todos los derechos reservados</p>
            <div className="footer-links">
              <a href="#">Términos y condiciones</a>
              <a href="#">Política de privacidad</a>
              <a href="#">Contacto</a>
              <a href="#">Sobre nosotros</a>
              <a href="#">Envíos y devoluciones</a>
            </div>
          </div>
          <div className="payment-methods-footer">
            <p>Métodos de pago aceptados:</p>
            <div className="payment-icons">
              {Object.keys(paymentLogos).map(method => (
                <div key={method} className="payment-icon-small">
                  {renderPaymentLogo(method)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;