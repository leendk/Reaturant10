import { Check } from '@mui/icons-material';

export default function PricingCard() {
  const services = [
    'Services',
    'Services',
    'Services',
    'Services',
    'Services'
  ];

  return (
    <div style={{
      width: '100%',
      maxWidth: '400px',
      backgroundColor: 'white',
      borderRadius: '24px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
      overflow: 'hidden',
      margin: '0 auto'
    }}>
      <div style={{
        position: 'relative',
        backgroundColor: '#fce4ec',
        padding: '40px 30px 80px 30px',
        textAlign: 'left'
      }}>
        <h2 style={{
          fontSize: '32px',
          fontWeight: '600',
          color: '#333',
          margin: '0 0 20px 0'
        }}>
          Free
        </h2>
        <div style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: '8px'
        }}>
          <span style={{
            fontSize: '48px',
            fontWeight: '700',
            color: '#333'
          }}>
            $0
          </span>
          <span style={{
            fontSize: '18px',
            color: '#666'
          }}>
            /month
          </span>
        </div>
        
        <svg 
          style={{
            position: 'absolute',
            bottom: '-1px',
            left: 0,
            width: '100%',
            height: '60px'
          }}
          viewBox="0 0 400 60" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0 Q100,60 200,30 T400,0 L400,60 L0,60 Z" 
            fill="white"
          />
        </svg>
      </div>

      <div style={{
        padding: '40px 30px 30px 30px'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          marginBottom: '40px'
        }}>
          {services.map((service, index) => (
            <div 
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}
            >
              <div style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                border: '2px solid #f48fb1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Check style={{
                  fontSize: '16px',
                  color: '#f48fb1'
                }} />
              </div>
              <span style={{
                fontSize: '16px',
                color: '#555',
                fontWeight: '500'
              }}>
                {service}
              </span>
            </div>
          ))}
        </div>

        <button style={{
          width: '100%',
          padding: '16px',
          backgroundColor: '#fce4ec',
          border: 'none',
          borderRadius: '12px',
          fontSize: '18px',
          fontWeight: '600',
          color: '#333',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = '#f8bbd0';
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = '#fce4ec';
        }}
        >
          Select Plan
        </button>
      </div>
    </div>
  );
}
