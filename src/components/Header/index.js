import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div
    style={{
      background: '#e55934',
      marginBottom: '1.45rem',
      borderBottom: 'thick solid WhiteSmoke'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
         <svg width="260" height="80">
          <text x="6" y="62"
            style={{
              fontFamily:'Roboto',
              fontSize: 70,
              fill: '#7fb800',
            }}
            >
              J.F.D III
          </text>
          <text x="14" y="68"
            style={{
              fontFamily:'Roboto',
              fontSize: 70,
              fill: '#ffb400',
            }}
            >
              J.F.D III
          </text>          
          <text x="10" y="65"
            style={{
              fontFamily:'Roboto',
              fontSize: 70,
              fill: 'white',
            }}
            >
              J.F.D III
          </text>
        </svg>
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
