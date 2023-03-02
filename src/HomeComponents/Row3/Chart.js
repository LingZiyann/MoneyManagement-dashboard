import { ResponsiveLine } from '@nivo/line'
import { useEffect, useState } from 'react';

const MyResponsiveLine = () =>{
  const [janSpendings, setJanSpendings] = useState(0);
  const [febSpendings, setFebSpendings] = useState(0);
  const [marSpendings, setMarSpendings] = useState(0);
  const [aprSpendings, setAprSpendings] = useState(0);
  const [maySpendings, setMaySpendings] = useState(0);
  const [juneSpendings, setJuneSpendings] = useState(0);
  const [julyspendings, setJulySpendings] = useState(0);
  const [augSpendings, setAugSpendings] = useState(0);
  const [sepSpendings, setSepSpendings] = useState(0);
  const [octSpendings, setOctSpendings] = useState(0);
  const [novSpendings, setNovSpendings] = useState(0);
  const [decSpendings, setDecSpendings] = useState(0);

  async function getDataHandler () {
    const response = await fetch('https://money-management-5452c-default-rtdb.asia-southeast1.firebasedatabase.app/transactions.json')
    const myData = await response.json();
    for (const key in myData){
      const date = new Date(myData[key].date)
      const month = date.getMonth() + 1
      switch (month){
        case 1:
          setJanSpendings(prev => parseInt(prev) + parseInt(myData[key].amountSpent))
          break;
        case 2:
          setFebSpendings(prev => parseInt(prev) + parseInt(myData[key].amountSpent))
          break;
        case 3:
          setMarSpendings(prev => parseInt(prev) + parseInt(myData[key].amountSpent))
          break;   
        case 4:
          setAprSpendings(prev => parseInt(prev) + parseInt(myData[key].amountSpent))
          break;
        case 5:
          setMaySpendings(prev => parseInt(prev) + parseInt(myData[key].amountSpent))
          break;
        case 6:
          setJuneSpendings(prev => parseInt(prev) + parseInt(myData[key].amountSpent))
          break;
        case 7:
          setJulySpendings(prev => parseInt(prev) + parseInt(myData[key].amountSpent))
          break;
        case 8:
          setAugSpendings(prev => parseInt(prev) + parseInt(myData[key].amountSpent))
          break;
        case 9:
          setSepSpendings(prev => parseInt(prev) + parseInt(myData[key].amountSpent))
          break;
        case 10:
          setOctSpendings(prev => parseInt(prev) + parseInt(myData[key].amountSpent))
          break;
        case 11:
          setNovSpendings(prev => parseInt(prev) + parseInt(myData[key].amountSpent))
          break;
        case 12:
          setDecSpendings(prev => parseInt(prev) + parseInt(myData[key].amountSpent))
          break; 
      }
      };       
    }

    useEffect(() => {
      getDataHandler();
    },[]);

    const mydata = [
        {
          "id": "Money Spent",
          "color": "hsl(218, 70%, 50%)",
          "data": [
            {
              "x": "January",
              "y": janSpendings/2
            },
            {
              "x": "February",
              "y": febSpendings/2
            },
            {
              "x": "March",
              "y": marSpendings/2
            },
            {
              "x": "April",
              "y": aprSpendings/2
            },
            {
              "x": "May",
              "y": maySpendings/2
            },
            {
              "x": "June",
              "y": juneSpendings/2
            },
            {
              "x": "July",
              "y": julyspendings/2
            },
            {
              "x": "August",
              "y": augSpendings/2
            },
            {
              "x": "September",
              "y": sepSpendings/2
            },
            {
              "x": "October",
              "y": octSpendings/2
            },
            {
              "x": "November",
              "y": novSpendings/2
            },
            {
              "x": "December",
              "y": decSpendings/2
            }
          ]
        }
      ]

        return(
            <ResponsiveLine
            data={mydata}
            margin={{ top: 20, right: 110, bottom: 70, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{
                type: 'linear',
                min: 'auto',
                max: 'auto',
                stacked: false,
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