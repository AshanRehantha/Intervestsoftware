import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { lineChartComplete, lineChartRequest } from '../../_redux/_actions';
import axios from 'axios';
import { LineChart, Line, BarChart, Bar, PieChart, Pie } from 'recharts';

const DashBoardWrapper = () => {
  const data = {
    header:'Welcome to your dashboard',
    details:'try our new Admin Dashboard Template, build with live Ant-Design components. Customize it to your needs and release to production!'
  }
  const actionDispatch = useDispatch();

  const { lineChart } = useSelector((state) => {
    return {
      lineChart: state.chartReducer.lineChart
    };
});

  const getLineChartData = () => {
    actionDispatch(lineChartRequest())
    axios.get('https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2023-01-09/2023-03-09?adjusted=true&sort=asc&limit=120&apiKey=y9Ok1zT2HsrR3iBizpIm5Pt98UAzI8ap')
    .then(function (response) {
        let fetchdata = (response?.data?.results);
        actionDispatch(lineChartComplete(fetchdata))
    })
    .catch(function (error) {

    })
  }
  useEffect(() => {
    getLineChartData()
  },[]);

  return (
    <div className='dashboard-wapper'>
      <div class="row dashboard-wapper__card-margin">
        <div class="col-sm-12 col-md-8">
        <div className='dashboard-wapper__left_canva__welcome-card'>
                  <div className='dashboard-wapper__left_canva__welcome-card__details'>
                    <h3>{data?.header}</h3>
                    <p>{data?.details}</p>
                  </div>
                </div>
        </div>
        <div class="col-sm-12 col-md-4">
        <div className='dashboard-wapper__right_conva__top_grap'>
              <span>Chart Title</span>
                <BarChart width={380} height={200} data={lineChart?.slice(0, 5)}>
                  <Bar dataKey="h" fill="#8884d8" />
                </BarChart>
              </div>

        </div>
      </div>
      <div class="row dashboard-wapper__card-margin">
        <div class="col-sm-8 col-md-4">
        <div className='dashboard-wapper__left_canva__grap_canva__grap_card'>
        <div className='row'>
                  <div className='col-md-6 col-sm-6'>
                  <div className='dashboard-wapper__left_canva__grap_canva__grap_card__details'>
                  <span className='dashboard-wapper__left_canva__grap_canva__grap_card__details__header'>High</span>
                  <br/>
                  <span className='dashboard-wapper__left_canva__grap_canva__grap_card__details__value'>2,643</span>
                  <br/>
                  <span className='dashboard-wapper__left_canva__grap_canva__grap_card__details__header'>1.10% Since yesterday</span>
              </div>
                  </div>
                  <div className='col-md-6 col-sm-6'>
                  <div className='dashboard-wapper__left_canva__grap_canva__grap_card__chart'>
              <LineChart width={150} height={100} data={lineChart}>
                  <Line type="monotone" dataKey="v" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
              </div>  
              </div>
          </div>
        </div>
        </div>
        <div class="col-sm-8 col-md-4">
        <div className='dashboard-wapper__left_canva__grap_canva__grap_card'>
        <div className='row'>
                  <div className='col-md-6 col-sm-6'>
                  <div className='dashboard-wapper__left_canva__grap_canva__grap_card__details'>
                  <span className='dashboard-wapper__left_canva__grap_canva__grap_card__details__header'>High</span>
                  <br/>
                  <span className='dashboard-wapper__left_canva__grap_canva__grap_card__details__value'>2,643</span>
                  <br/>
                  <span className='dashboard-wapper__left_canva__grap_canva__grap_card__details__header'>1.10% Since yesterday</span>
              </div>
                  </div>
                  <div className='col-md-6 col-sm-6'>
                  <div className='dashboard-wapper__left_canva__grap_canva__grap_card__chart'>
              <LineChart width={150} height={100} data={lineChart}>
                  <Line type="monotone" dataKey="v" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
              </div>  
              </div>
          </div>
        </div>
        </div>
        <div class="col-sm-12 col-md-4">

        <div className='dashboard-wapper__left_canva__grap_canva__grap_card'>
        <div className='row'>
                  <div className='col-md-6 col-sm-6'>
                  <div className='dashboard-wapper__left_canva__grap_canva__grap_card__details'>
                  <span className='dashboard-wapper__left_canva__grap_canva__grap_card__details__header'>High</span>
                  <br/>
                  <span className='dashboard-wapper__left_canva__grap_canva__grap_card__details__value'>2,643</span>
                  <br/>
                  <span className='dashboard-wapper__left_canva__grap_canva__grap_card__details__header'>1.10% Since yesterday</span>
              </div>
                  </div>
                  <div className='col-md-6 col-sm-6'>
                  <div className='dashboard-wapper__left_canva__grap_canva__grap_card__chart'>
              <LineChart width={150} height={100} data={lineChart}>
                  <Line type="monotone" dataKey="v" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
              </div>  
              </div>
          </div>
        </div>
        </div>
      </div>


      <div class="row">
        <div class="col-sm-9">
        <div className='dashboard-wapper__left_canva__fullChart'>
              <span>Last Month</span>
              <BarChart width={900} height={240} data={lineChart}>
                <Bar dataKey="h" fill="#8884d8" />
              </BarChart>
              </div>
        </div>
        <div class="col-sm-3">
        <div className='dashboard-wapper__right_conva__last_pie_grap'>
              <span>Chart Title</span>
              <PieChart width={200} height={400}>
                <Pie data={lineChart?.slice(0, 5)} dataKey="h" cx="55%" cy="30%" outerRadius={90} fill="#8884d8" />
              </PieChart>
              </div>
        </div>
      </div>
    </div>
  )
}

export default DashBoardWrapper
