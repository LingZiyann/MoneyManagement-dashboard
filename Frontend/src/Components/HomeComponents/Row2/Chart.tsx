import { ResponsiveLine } from '@nivo/line'
import { useEffect, useState, useRef } from 'react';
import classes from './Chart.module.css';

interface lineProps{
  fontSize: number
}

const MyResponsiveLine = (props: lineProps) =>{
  const [janSpendings, setJanSpendings] = useState<number>(0);
  const [febSpendings, setFebSpendings] = useState<number>(0);
  const [marSpendings, setMarSpendings] = useState<number>(0);
  const [aprSpendings, setAprSpendings] = useState<number>(0);
  const [maySpendings, setMaySpendings] = useState<number>(0);
  const [juneSpendings, setJuneSpendings] = useState<number>(0);
  const [julyspendings, setJulySpendings] = useState<number>(0);
  const [augSpendings, setAugSpendings] = useState<number>(0);
  const [sepSpendings, setSepSpendings] = useState<number>(0);
  const [octSpendings, setOctSpendings] = useState<number>(0);
  const [novSpendings, setNovSpendings] = useState<number>(0);
  const [decSpendings, setDecSpendings] = useState<number>(0);
  const token = localStorage.getItem('token');
  const uid = localStorage.getItem('userId')

  async function getDataHandler () {
    const response = await fetch(process.env.REACT_APP_BACKEND_URL +`/form/${uid}/transactions`, {
      method: 'GET',
      headers: {
          'Content-Type' : 'application/json',
          'Authorization' : `Bearer ${token}`
      }
    });
    const myData = await response.json();
    for (const key in myData){
      if (myData[key].date !== null) {
        const date = new Date(myData[key].date)
        const month = date.getMonth() + 1
        switch (month){
          case 1:
            setJanSpendings(prev => prev + parseInt(myData[key].amountSpent))
            break;
          case 2:
            setFebSpendings(prev => prev + parseInt(myData[key].amountSpent))
            break;
          case 3:
            setMarSpendings(prev => prev + parseInt(myData[key].amountSpent))
            break;   
          case 4:
            setAprSpendings(prev => prev + parseInt(myData[key].amountSpent))
            break;
          case 5:
            setMaySpendings(prev => prev + parseInt(myData[key].amountSpent))
            break;
          case 6:
            setJuneSpendings(prev => prev + parseInt(myData[key].amountSpent))
            break;
          case 7:
            setJulySpendings(prev => prev + parseInt(myData[key].amountSpent))
            break;
          case 8:
            setAugSpendings(prev => prev + parseInt(myData[key].amountSpent))
            break;
          case 9:
            setSepSpendings(prev => prev + parseInt(myData[key].amountSpent))
            break;
          case 10:
            setOctSpendings(prev => prev + parseInt(myData[key].amountSpent))
            break;
          case 11:
            setNovSpendings(prev => prev + parseInt(myData[key].amountSpent))
            break;
          case 12:
            setDecSpendings(prev => prev + parseInt(myData[key].amountSpent))
            break; 
          }
          };
        }      
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
              "x": "Jan",
              "y": janSpendings
            },
            {
              "x": "Feb",
              "y": febSpendings
            },
            {
              "x": "Mar",
              "y": marSpendings
            },
            {
              "x": "Apr",
              "y": aprSpendings
            },
            {
              "x": "May",
              "y": maySpendings
            },
            {
              "x": "Jun",
              "y": juneSpendings
            },
            {
              "x": "Jul",
              "y": julyspendings
            },
            {
              "x": "Aug",
              "y": augSpendings
            },
            {
              "x": "Sep",
              "y": sepSpendings
            },
            {
              "x": "Oct",
              "y": octSpendings
            },
            {
              "x": "Nov",
              "y": novSpendings
            },
            {
              "x": "Dec",
              "y": decSpendings
            }
          ]
        }
      ]

        return(
            <ResponsiveLine
            data={mydata}
            theme={{"axis" :  {"ticks" : {"text" : {"fontSize" : props.fontSize}}}}}
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
                //orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Month',
                legendOffset: 36,
                legendPosition: 'middle'
            }}
            axisLeft={{
                //orient: 'left',
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