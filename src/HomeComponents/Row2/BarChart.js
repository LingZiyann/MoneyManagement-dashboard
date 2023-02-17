import { ResponsiveBar } from '@nivo/bar'

const MyResponsiveBar = () => {

    const data = [
        {
          "country": "AD",
          "hot dog": 132,
          "hot dogColor": "hsl(213, 70%, 50%)",
          "burger": 16,
          "burgerColor": "hsl(359, 70%, 50%)",
          "sandwich": 131,
          "sandwichColor": "hsl(73, 70%, 50%)",
          "kebab": 103,
          "kebabColor": "hsl(233, 70%, 50%)",
          "fries": 106,
          "friesColor": "hsl(314, 70%, 50%)",
          "donut": 58,
          "donutColor": "hsl(158, 70%, 50%)"
        },
        {
          "country": "AE",
          "hot dog": 14,
          "hot dogColor": "hsl(188, 70%, 50%)",
          "burger": 143,
          "burgerColor": "hsl(179, 70%, 50%)",
          "sandwich": 167,
          "sandwichColor": "hsl(2, 70%, 50%)",
          "kebab": 37,
          "kebabColor": "hsl(45, 70%, 50%)",
          "fries": 88,
          "friesColor": "hsl(280, 70%, 50%)",
          "donut": 178,
          "donutColor": "hsl(224, 70%, 50%)"
        },
        {
          "country": "AF",
          "hot dog": 15,
          "hot dogColor": "hsl(270, 70%, 50%)",
          "burger": 96,
          "burgerColor": "hsl(107, 70%, 50%)",
          "sandwich": 98,
          "sandwichColor": "hsl(145, 70%, 50%)",
          "kebab": 172,
          "kebabColor": "hsl(294, 70%, 50%)",
          "fries": 198,
          "friesColor": "hsl(359, 70%, 50%)",
          "donut": 31,
          "donutColor": "hsl(56, 70%, 50%)"
        },
        {
          "country": "AG",
          "hot dog": 95,
          "hot dogColor": "hsl(284, 70%, 50%)",
          "burger": 139,
          "burgerColor": "hsl(134, 70%, 50%)",
          "sandwich": 50,
          "sandwichColor": "hsl(0, 70%, 50%)",
          "kebab": 63,
          "kebabColor": "hsl(164, 70%, 50%)",
          "fries": 72,
          "friesColor": "hsl(89, 70%, 50%)",
          "donut": 125,
          "donutColor": "hsl(3, 70%, 50%)"
        },
        {
          "country": "AI",
          "hot dog": 124,
          "hot dogColor": "hsl(146, 70%, 50%)",
          "burger": 122,
          "burgerColor": "hsl(103, 70%, 50%)",
          "sandwich": 71,
          "sandwichColor": "hsl(10, 70%, 50%)",
          "kebab": 189,
          "kebabColor": "hsl(92, 70%, 50%)",
          "fries": 163,
          "friesColor": "hsl(143, 70%, 50%)",
          "donut": 193,
          "donutColor": "hsl(123, 70%, 50%)"
        },
        {
          "country": "AL",
          "hot dog": 62,
          "hot dogColor": "hsl(260, 70%, 50%)",
          "burger": 121,
          "burgerColor": "hsl(247, 70%, 50%)",
          "sandwich": 158,
          "sandwichColor": "hsl(250, 70%, 50%)",
          "kebab": 194,
          "kebabColor": "hsl(236, 70%, 50%)",
          "fries": 159,
          "friesColor": "hsl(74, 70%, 50%)",
          "donut": 140,
          "donutColor": "hsl(80, 70%, 50%)"
        },
        {
          "country": "AM",
          "hot dog": 122,
          "hot dogColor": "hsl(249, 70%, 50%)",
          "burger": 95,
          "burgerColor": "hsl(114, 70%, 50%)",
          "sandwich": 168,
          "sandwichColor": "hsl(200, 70%, 50%)",
          "kebab": 34,
          "kebabColor": "hsl(257, 70%, 50%)",
          "fries": 91,
          "friesColor": "hsl(333, 70%, 50%)",
          "donut": 61,
          "donutColor": "hsl(67, 70%, 50%)"
        }
      ]

    return (
    <ResponsiveBar
        data={data}
        keys={[
            'hot dog',
            'burger',
            'sandwich',
            'kebab',
            'fries',
            'donut'
        ]}
        indexBy="country"
        margin={{ top: 40, right: 100, bottom: 80, left: 50 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'country',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'food',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
    />)
}

export default MyResponsiveBar;