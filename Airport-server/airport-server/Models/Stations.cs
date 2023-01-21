using airport_server.AirportData;
using airport_server.Connection;
using Microsoft.AspNet.SignalR;
using System.Timers;
namespace airport_server.Models
{
    public class Stations
    {
        private IAirportData _service;
        private List<Airplane> _takeOffPlanes;
        private List<Airplane> _landingPlanes;
        private static System.Timers.Timer _timer;
        private static int counter = 1;

        private AirportHub _clinets = new AirportHub();

        private Queue<Airplane> _landings = new Queue<Airplane>();
        private Queue<Airplane> _takeOff = new Queue<Airplane>();

        private static bool oneStationFree = true, twoStationFree = true, threeStationFree = true, fourStationFree = true
, fiveStationFree = true, sixStationFree = true, sevenStationFree = true, eightStationFree = true, nineStationFree = true, dividerIsFree = true;

        public Stations(List<Airplane> takeOffPlanes, List<Airplane> landingPlans, IAirportData service)
        {
            _service = service;
            _takeOffPlanes = takeOffPlanes;
            _landingPlanes = landingPlans;
        }
        public Stations(Airplane airplane, bool isThisPlaneIsAlandingPlane)
        {
            if (isThisPlaneIsAlandingPlane) { _landings.Enqueue(airplane); }
            else { _takeOff.Enqueue(airplane); }
            DividerQue();
        }

        private async void DividerQue()
        {
            while (_takeOff.Count > 0 || _landings.Count > 0) // this function active only if there are planes that whiting 
            {
                if (dividerIsFree) //make sure that only one plane will enter
                {
                    if (counter % 2 == 0)
                    {
                        if (_landings.Count > 0) { ++counter; StationDevider(_landings.Dequeue(), true); } // start stations with the landing plane
                        else { ++counter; StationDevider(_takeOff.Dequeue(), false); } // start stations with takeoff plane

                    }
                    else
                    {
                        if (_takeOff.Count > 0) { ++counter; StationDevider(_takeOff.Dequeue(), false); }// start stations with takeoff plane

                        else { ++counter; StationDevider(_landings.Dequeue(), true); } // start stations with the landing plane
                    }
                }


            }


        }

        //public void Loop()
        //{
        //    _timer = new System.Timers.Timer(1000);
        //    _timer.Elapsed += StationDevider;
        //    _timer.AutoReset = true;
        //    _timer.Enabled = true;
        //}

        public async void StationDevider(Airplane airplane, bool isThisPlaneIsAlandingPlane)
        {
            dividerIsFree = false;
            if (isThisPlaneIsAlandingPlane) //landing plane
            {

                if (oneStationFree) { dividerIsFree = true; Sone(airplane); }

                else
                {
                    async void checkIfFree()
                    {
                        while (!oneStationFree) { }
                        dividerIsFree = true;
                        Sone(airplane);
                    }
                }

            }
            else //takeOff plane (isThisPlaneIsAlandingPlane = false) 
            {
                if (sevenStationFree) { dividerIsFree = true; Sseven(airplane, isThisPlaneIsAlandingPlane); }
                else
                {
                    async void checkIfFree()
                    {
                        while (!sevenStationFree) { }
                        dividerIsFree = true;
                        Sseven(airplane, isThisPlaneIsAlandingPlane);
                    }
                }

            }




        }


        private void Sone(Airplane landingPlane)
        {
            oneStationFree = false;
            StationData data = new StationData(1, landingPlane.CompanyName, true);

            _clinets.ReciveStationStatus(data);

            Thread.Sleep(2000);
            if (twoStationFree)
            {

                Stwo(landingPlane);
            }
            else
            {
                async void checkIfFree()
                {
                    while (!twoStationFree) { }
                    Stwo(landingPlane);
                }
            }

        }
        private void Stwo(Airplane landingPlane)
        {
            twoStationFree = false;
            oneStationFree = true;
            Thread.Sleep(2000);
            if (threeStationFree) { Sthree(landingPlane); }
            else
            {
                async void checkIfFree()
                {
                    while (!threeStationFree) { }
                    Sthree(landingPlane);
                }
            }
        }
        private void Sthree(Airplane landingPlane)
        {
            threeStationFree = false;
            twoStationFree = true;

            Thread.Sleep(2000);
            if (fourStationFree) { Sfour(landingPlane, true); }
            else
            {
                async void checkIfFree()
                {
                    while (!fourStationFree) { }
                    Sfour(landingPlane, true);
                }
            }
        }
        private void Sfour(Airplane plane, bool isThePlaneIsLandingPlane)
        {
            fourStationFree = false;
            fourStationFree = true;
            Thread.Sleep(2000);
            if (isThePlaneIsLandingPlane)
            {
                threeStationFree = true;
                if (fiveStationFree) { Sfive(plane); }
                else
                {
                    async void checkIfFree()
                    {
                        while (!fiveStationFree) { }
                        Sfive(plane);
                    }
                }
            }
            else
            {
                eightStationFree = true;
                if (nineStationFree) { Snine(plane); }
                else
                {
                    async void checkIfFree()
                    {
                        while (!nineStationFree) { }
                        Snine(plane);
                    }
                }
            }
        }

        private void Sfive(Airplane landingPlane)
        {
            fiveStationFree = false;
            fourStationFree = true;
            Thread.Sleep(2000);
            if (sixStationFree) { Ssix(landingPlane); }
            else
            {
                if (sevenStationFree) { Sseven(landingPlane, true); }
                else
                {
                    async void checkIfFree()
                    {
                        while (!sixStationFree)
                        {
                            if (sevenStationFree)
                            {
                                Sseven(landingPlane, true);
                            }
                            Ssix(landingPlane);
                        }
                    }

                }
            }
        }
        private void Ssix(Airplane landingPlane)
        {
            sixStationFree = false;
            fiveStationFree = true;
            _service.AddAirplane(landingPlane);
            Thread.Sleep(2000);

            sixStationFree = true;

        }
        private void Sseven(Airplane plane, bool isThePlaneIsLandingPlane)
        {
            sevenStationFree = false;

            if (isThePlaneIsLandingPlane)
            {
                fiveStationFree = true;
                Thread.Sleep(2000);
                _service.AddAirplane(plane);
            }
            else
            {
                if (eightStationFree) { Seight(plane); }
                else
                {
                    async void checkIfFree()
                    {
                        while (!eightStationFree) { }
                        Seight(plane);

                    }
                }

            }
        }
        private void Seight(Airplane takeOfPlane)
        {
            eightStationFree = false;
            sevenStationFree = true;
            Thread.Sleep(2000);
            if (fourStationFree) { Sfour(takeOfPlane, false); }
            else
            {
                async void checkIfFree()
                {
                    while (!fourStationFree) { }
                    Sfour(takeOfPlane, false);

                }
            }
        }
        private void Snine(Airplane takeOfPlane)
        {
            nineStationFree = false;
            fourStationFree = true;

            Thread.Sleep(2000);
            nineStationFree = true;
        }





    }
}
