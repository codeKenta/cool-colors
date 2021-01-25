/** @jsxRuntime classic */
/** @jsx jsx */

import { useState, useEffect } from 'react'
import { jsx, Button } from 'theme-ui'
import Fade from 'react-reveal/Fade'
import colorContrast from 'get-contrast'

function ColorGrid() {
  const [activePage, setActivePage] = useState(1)
  const [items, setItems] = useState()
  const [endOfItems, setEndOfItems] = useState(false)

  useEffect(() => {
    loadColors()
  }, [])

  async function loadColors(pageNumber = 1) {
    const response = await fetch(
      `https://reqres.in/api/example?per_page=8&page=${pageNumber}`
    )

    const responseData = await response.json()

    const { data, total_pages, page } = responseData

    if (data) {
      setItems(data)
      setActivePage(page)
      setEndOfItems(total_pages === page)
    }
  }

  function loadPreviousPage() {
    let pageNumber = activePage - 1

    loadColors(pageNumber)
  }

  function loadNextPage() {
    let pageNumber = activePage + 1

    loadColors(pageNumber)
  }

  const getAccessibleColor = (backgroundColor) => {
    const black = '#000000'
    const white = '#FFFFFF'

    const blackTextContrast = colorContrast.ratio(backgroundColor, black)
    const whiteTextContrast = colorContrast.ratio(backgroundColor, white)

    if (whiteTextContrast > blackTextContrast) {
      return white
    }
    return black
  }

  const renderItems = () => {
    if (items) {
      return items.map(({ id, color, name }) => (
        <div
          key={id}
          sx={{
            padding: '10px',
            backgroundColor: color,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span
            sx={{
              fontFamily: 'body',
              fontWeight: 'bold',
              color: getAccessibleColor(color),
              textTransform: 'uppercase',
              fontSize: '14px',
            }}
          >
            {name}
          </span>
        </div>
      ))
    }
  }

  return (
    <div>
      {items && (
        <Fade>
          <div
            sx={{
              display: 'grid',
              gridAutoRows: '150px',
              gridGap: '15px',
              gridTemplateColumns: '150px',
              justifyContent: 'center',
              '@media only screen and (min-width: 450px)': {
                gridTemplateColumns: 'repeat(2, 150px)',
              },
              '@media only screen and (min-width: 800px)': {
                gridTemplateColumns: 'repeat(4, 150px)',
              },
            }}
          >
            {renderItems()}
          </div>
        </Fade>
      )}

      {items && (
        <div
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            maxWidth: '600px',
            margin: '0 auto',
            marginTop: '50px',
          }}
        >
          {activePage !== 1 && (
            <Button
              onClick={loadPreviousPage}
              sx={{
                variant: 'buttons.primary',
                placeSelf: 'start',
                gridColumnStart: '1',
              }}
            >
              Previous Page
            </Button>
          )}

          {!endOfItems && (
            <Button
              onClick={loadNextPage}
              sx={{
                gridColumnStart: '2',
                placeSelf: 'end',
              }}
            >
              Next Page
            </Button>
          )}
        </div>
      )}
    </div>
  )
}

export default ColorGrid
