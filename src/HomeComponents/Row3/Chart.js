import { ResponsiveLine } from '@nivo/line'

const MyResponsiveLine = () =>{
    const mydata = [
        {
          "id": "japan",
          "color": "hsl(218, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 23
            },
            {
              "x": "helicopter",
              "y": 123
            },
            {
              "x": "boat",
              "y": 72
            },
            {
              "x": "train",
              "y": 228
            },
            {
              "x": "subway",
              "y": 100
            },
            {
              "x": "bus",
              "y": 256
            },
            {
              "x": "car",
              "y": 227
            },
            {
              "x": "moto",
              "y": 199
            },
            {
              "x": "bicycle",
              "y": 3
            },
            {
              "x": "horse",
              "y": 105
            },
            {
              "x": "skateboard",
              "y": 182
            },
            {
              "x": "others",
              "y": 182
            }
          ]
        },
        {
          "id": "france",
          "color": "hsl(245, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 268
            },
            {
              "x": "helicopter",
              "y": 101
            },
            {
              "x": "boat",
              "y": 243
            },
            {
              "x": "train",
              "y": 123
            },
            {
              "x": "subway",
              "y": 102
            },
            {
              "x": "bus",
              "y": 163
            },
            {
              "x": "car",
              "y": 266
            },
            {
              "x": "moto",
              "y": 261
            },
            {
              "x": "bicycle",
              "y": 120
            },
            {
              "x": "horse",
              "y": 193
            },
            {
              "x": "skateboard",
              "y": 73
            },
            {
              "x": "others",
              "y": 207
            }
          ]
        },
        {
          "id": "us",
          "color": "hsl(129, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 264
            },
            {
              "x": "helicopter",
              "y": 259
            },
            {
              "x": "boat",
              "y": 241
            },
            {
              "x": "train",
              "y": 201
            },
            {
              "x": "subway",
              "y": 113
            },
            {
              "x": "bus",
              "y": 196
            },
            {
              "x": "car",
              "y": 37
            },
            {
              "x": "moto",
              "y": 8
            },
            {
              "x": "bicycle",
              "y": 29
            },
            {
              "x": "horse",
              "y": 137
            },
            {
              "x": "skateboard",
              "y": 172
            },
            {
              "x": "others",
              "y": 228
            }
          ]
        },
        {
          "id": "germany",
          "color": "hsl(56, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 82
            },
            {
              "x": "helicopter",
              "y": 254
            },
            {
              "x": "boat",
              "y": 124
            },
            {
              "x": "train",
              "y": 119
            },
            {
              "x": "subway",
              "y": 241
            },
            {
              "x": "bus",
              "y": 149
            },
            {
              "x": "car",
              "y": 249
            },
            {
              "x": "moto",
              "y": 166
            },
            {
              "x": "bicycle",
              "y": 105
            },
            {
              "x": "horse",
              "y": 171
            },
            {
              "x": "skateboard",
              "y": 12
            },
            {
              "x": "others",
              "y": 243
            }
          ]
        },
        {
          "id": "norway",
          "color": "hsl(167, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 163
            },
            {
              "x": "helicopter",
              "y": 168
            },
            {
              "x": "boat",
              "y": 102
            },
            {
              "x": "train",
              "y": 171
            },
            {
              "x": "subway",
              "y": 172
            },
            {
              "x": "bus",
              "y": 229
            },
            {
              "x": "car",
              "y": 117
            },
            {
              "x": "moto",
              "y": 19
            },
            {
              "x": "bicycle",
              "y": 275
            },
            {
              "x": "horse",
              "y": 53
            },
            {
              "x": "skateboard",
              "y": 245
            },
            {
              "x": "others",
              "y": 271
            }
          ]
        }
      ]

        return(
            <ResponsiveLine
            data={mydata}
            margin={{ top: 0, right: 110, bottom: 70, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{
                type: 'linear',
                min: 'auto',
                max: 'auto',
                stacked: true,
                reverse: false
            }}
            yFormat=" >-.2f"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'transportation',
                legendOffset: 36,
                legendPosition: 'middle'
            }}
            axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'count',
                legendOffset: -40,
                legendPosition: 'middle'
            }}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: 'left-to-right',
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemBackground: 'rgba(0, 0, 0, .03)',
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
        />
        )
}

export default MyResponsiveLine;