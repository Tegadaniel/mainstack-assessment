import React, { useState, useEffect } from "react";
import { pillsData } from "./data";
import info from "../../assets/images/info.svg";
import twitter from "../../assets/images/twitter.svg";
import linkedin from "../../assets/images/linkedin.svg";
import instagram from "../../assets/images/instagram.svg";
import facebook from "../../assets/images/facebook.svg";
import Graph from "../../components/Graph";
import DoughnutChart from "../../components/Doughnut";
import { DotIcon } from "../../assets/images/components";
import axios from "axios";
import ContentLoader from "react-content-loader";

const Greeting = ({ name }) => {
  const currentHour = new Date().getHours();

  if (currentHour >= 0 && currentHour < 12) {
    return (
      <>
        <span>Good morning, {name} 🌞</span>
      </>
    );
  } else if (currentHour >= 12 && currentHour < 18) {
    return (
      <>
        <span>Good afternoon, {name} ⛅️</span>
      </>
    );
  } else {
    return (
      <>
        <span>Good evening, {name} 🌙</span>
      </>
    );
  }
};

function Overview() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fe-task-api.mainstack.io/");
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const countries = ["🇳🇬", "🇩🇪", "🇬🇭", "🇫🇮", "🇬🇧"];
  const Color = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#FF8A80"];

  const topLocationsWithFlags = data?.top_locations.map((location, index) => {
    return {
      country: location.country,
      count: location.count,
      percent: location.percent,
      flag: countries[index],
      color: Color[index],
    };
  });
  const datatop_location = {
    labels: data?.top_locations.map((item) => item.country),
    datasets: [
      {
        data: data?.top_locations.map((item) => item.percent),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#FF8A80",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#FF8A80",
        ],
      },
    ],
  };

  const companyLogo = [twitter, instagram, facebook, linkedin];
  const topSourceWithLogo = data?.top_sources.map((item, index) => {
    let source = item.source;
    if (source === "google") {
      source = "twitter";
    }
    return {
      source,
      count: item.count,
      percent: item.percent,
      flag: companyLogo[index],
      color: Color[index],
    };
  });

  const datatop_sources = {
    labels: data?.top_sources.map((item) => item.source),
    datasets: [
      {
        data: data?.top_sources.map((item) => item.percent),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#FF8A80",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#FF8A80",
        ],
      },
    ],
  };

  const [activePill, setActivePill] = useState(4);

  const handleClick = (index) => {
    setActivePill(index);
  };
  return (
    <div>
      {error && (
        <p className="flex justify-center items-center fixed inset-0 z-50 bg-gray-900 bg-opacity-50 text-white">
          Error: {error.message}
        </p>
      )}
      {isLoading ? (
        <ContentLoader
          speed={2}
          width={400}
          height={160}
          viewBox="0 0 400 160"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <div className="w-full mt-[55px]">
            <div className="flex justify-between items-center">
              <div className="flex flex-col justify-start gap-2">
                <rect x="0" y="0" rx="3" ry="3" width="400" height="10" />
                <rect x="0" y="0" rx="3" ry="3" width="400" height="10" />
              </div>
              <rect x="0" y="0" rx="3" ry="3" width="400" height="10" />
            </div>

            <div className="mt-[23px] flex">
              <div className="w-full basis-2/5">
                <div className="flex flex-col md:flex-row justify-between gap-1">
                  <rect x="0" y="0" rx="3" ry="3" width="400" height="10" />
                </div>
              </div>
            </div>

            <div className=" mt-7 mb-6"></div>
            <div className="w-full cursor-pointer h-[600px] grid md:grid-cols-12 rounded-md border border-[#C4C4C4] mb-8">
              <div className="col-span-12 mt-[32px] ml-[24px] mr-[24px]">
                <div className="flex justify-between">
                  <div className="flex flex-col gap-1">
                    <rect x="0" y="0" rx="3" ry="3" width="400" height="10" />
                    <rect x="0" y="0" rx="3" ry="3" width="400" height="10" />
                  </div>
                </div>
                <div className="mt-[20px] mb-[32px]">
                  <rect x="0" y="0" rx="3" ry="3" width="400" height="10" />
                </div>

                <div className="h-[365px]">
                  <rect x="0" y="0" rx="3" ry="3" width="400" height="10" />
                  <rect x="0" y="0" rx="3" ry="3" width="400" height="10" />
                  <rect x="0" y="0" rx="3" ry="3" width="400" height="10" />
                  <rect x="0" y="0" rx="3" ry="3" width="400" height="10" />
                </div>
              </div>
            </div>
            <div className="flex gap-4 w-full">
              <div className="w-1/2 cursor-pointer h-[326px] grid md:grid-cols-12 rounded-md border border-[#C4C4C4] mb-8">
                <div className="col-span-6">
                  <div className="mt-[24px] ml-[24px] flex flex-col gap-8">
                    <rect x="0" y="0" rx="3" ry="3" width="400" height="10" />

                    <div className="flex flex-col gap-[18px]">
                      <rect x="0" y="0" rx="3" ry="3" width="400" height="10" />
                      <rect x="0" y="0" rx="3" ry="3" width="400" height="10" />
                      <rect x="0" y="0" rx="3" ry="3" width="400" height="10" />
                      <rect x="0" y="0" rx="3" ry="3" width="400" height="10" />
                    </div>
                  </div>
                </div>
                <div className="col-span-6">
                  <div className="flex justify-center items-center flex-col gap-8 w-full">
                    <p className="flex mt-[24px] mr-[24px] text-[14px] font-light text-[#FF5403]">
                      <rect x="0" y="0" rx="3" ry="3" width="400" height="10" />
                    </p>
                    <rect x="0" y="0" rx="3" ry="3" width="400" height="10" />
                    <rect x="0" y="0" rx="3" ry="3" width="400" height="10" />
                  </div>
                </div>
              </div>
              <div className="w-1/2 cursor-pointer h-[326px] grid md:grid-cols-12 rounded-md border border-[#C4C4C4] mb-8">
                <div className="col-span-6">
                  <div className="mt-[24px] ml-[24px] flex flex-col gap-8">
                    <rect x="0" y="0" rx="3" ry="3" width="400" height="10" />

                    <div className="flex flex-col gap-[18px]">
                      <rect x="0" y="0" rx="3" ry="3" width="400" height="10" />
                      <rect x="0" y="0" rx="3" ry="3" width="400" height="10" />
                      <rect x="0" y="0" rx="3" ry="3" width="400" height="10" />
                      <rect x="0" y="0" rx="3" ry="3" width="400" height="10" />
                    </div>
                  </div>
                </div>
                <div className="col-span-6">
                  <div className="flex justify-center items-center flex-col gap-8 w-full">
                    <rect x="0" y="0" rx="3" ry="3" width="400" height="10" />

                    <rect x="0" y="0" rx="3" ry="3" width="400" height="10" />
                    <rect x="0" y="0" rx="3" ry="3" width="400" height="10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ContentLoader>
      ) : data && !error ? (
        <div className="w-full mt-[55px]">
          <div className="flex justify-between items-center">
            <div className="flex flex-col justify-start gap-2">
              <h3 className=" text-black-300 text-xl font-semibold">
                <Greeting name="Blessing" />
              </h3>
              <p>Check out your dashboard summary.</p>
            </div>
            <div className=" text-[#FF5403]">View analytics</div>
          </div>

          <div className="mt-[23px] flex">
            <div className="w-full basis-2/5">
              <div className="flex flex-col md:flex-row justify-between gap-1">
                {pillsData.map((data, index) => (
                  <div
                    className={`cursor-pointer rounded-full flex border p-2 items-center ${
                      activePill === index
                        ? "bg-[#FFDDCD] border-[#FF5403]"
                        : " border-[#EFF1F6] bg-white"
                    }`}
                    key={index + 1}
                    onClick={() => handleClick(index)}
                  >
                    <span
                      className={`text-[14px] ${
                        activePill === index ? "text-[#FF5403]" : ""
                      }`}
                    >
                      {data.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className=" mt-7 mb-6"></div>
          <div className="w-full cursor-pointer h-[600px] grid md:grid-cols-12 rounded-md border border-[#C4C4C4] mb-8">
            <div className="col-span-12 mt-[32px] ml-[24px] mr-[24px]">
              <div className="flex justify-between">
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold">Page Views</p>
                  <p className="text-[14px]">All time</p>
                </div>
                <div>
                  <img src={info} alt="info" />
                </div>
              </div>
              <div className="mt-[20px] mb-[32px]">
                <h1 className="text-[48px] text-[#131316]">500</h1>
              </div>

              <div className="h-[365px]">
                <Graph data={data.graph_data} />
              </div>
            </div>
          </div>
          <div className="flex gap-4 w-full">
            <div className="w-1/2 cursor-pointer h-[326px] grid md:grid-cols-12 rounded-md border border-[#C4C4C4] mb-8">
              <div className="col-span-6">
                <div className="mt-[24px] ml-[24px] flex flex-col gap-8">
                  <p className=" text-[18px] font-semibold text-[#131316]">
                    Top Locations
                  </p>
                  <div className="flex flex-col gap-[18px]">
                    {topLocationsWithFlags.map((item, index) => (
                      <div key={index} className="flex gap-2 items-center">
                        <div>{item.flag}</div>
                        <div> {item.country} </div>
                        <div>{item.count}%</div>
                        <div>
                          <DotIcon width={10} height={10} fill={item.color} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-span-6">
                <div className="flex justify-center items-center flex-col gap-8 w-full">
                  <p className="flex mt-[24px] mr-[24px] text-[14px] font-light text-[#FF5403]">
                    View full reports
                  </p>
                  <DoughnutChart data={datatop_location} />
                </div>
              </div>
            </div>
            <div className="w-1/2 cursor-pointer h-[326px] grid md:grid-cols-12 rounded-md border border-[#C4C4C4] mb-8">
              <div className="col-span-6">
                <div className="mt-[24px] ml-[24px] flex flex-col gap-8">
                  <p className=" text-[18px] font-semibold text-[#131316]">
                    Top Referral source
                  </p>
                  <div className="flex flex-col gap-[18px]">
                    {topSourceWithLogo.map((item, index) => (
                      <div key={index} className="flex gap-2 items-center">
                        <div>
                          <img src={item.flag} alt={item.flag} />
                        </div>
                        <div className="capitalize">{item.source}</div>
                        <div> {item.percent}% </div>
                        <div>
                          <DotIcon width={10} height={10} fill={item.color} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-span-6">
                <div className="flex justify-center items-center flex-col gap-8 w-full">
                  <p className="flex mt-[24px] mr-[24px] text-[14px] font-light text-[#FF5403]">
                    View full reports
                  </p>
                  <DoughnutChart data={datatop_sources} />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default Overview;
