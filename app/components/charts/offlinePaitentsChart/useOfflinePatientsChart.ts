"use client";
import { Appointment } from "@/app/types/Type";
import { ChartData, Chart as ChartJS, ChartOptions } from "chart.js";
import { useRef } from "react";
import { useCalender } from "../../calender/useCalender";

export const useOfflinePatientsChart = () => {
  const chartRef = useRef<ChartJS<"line"> | null>(null);
  const { events } = useCalender();

  const offlineConsultations: Appointment[] =
    events?.filter(
      (event: Appointment) => event?.appointmentType === "Offline_Consultation"
    ) || [];

  const groupByWeek = (
    appointments: Appointment[]
  ): { [key: string]: Appointment[] } => {
    const weeks: { [key: string]: Appointment[] } = {};

    appointments.forEach((appointment) => {
      if (appointment.start) {
        const startDate = new Date(appointment.start);
        const startWeek = new Date(
          startDate.setDate(startDate.getDate() - startDate.getDay())
        );
        const weekString = startWeek.toISOString().split("T")[0];

        if (!weeks[weekString]) {
          weeks[weekString] = [];
        }
        weeks[weekString].push(appointment);
      }
    });

    return weeks;
  };

  const onlineGroupedByWeek = groupByWeek(offlineConsultations);

  const data: ChartData<"line"> = {
    labels: Object.keys(onlineGroupedByWeek),
    datasets: [
      {
        label: "Online Consultations",
        data: Object.values(onlineGroupedByWeek).map(
          (appointments) => appointments.length
        ),
        fill: true,
        backgroundColor: (context: any) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            return null;
          }

          const gradient = ctx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom
          );
          gradient.addColorStop(0, "rgba(192, 75, 75, 1)");
          gradient.addColorStop(1, "rgba(192, 75, 75, 0)");
          return gradient;
        },
        borderColor: "rgba(192, 75, 75, 1)",
        borderWidth: 2,
        tension: 0.4,
        pointBackgroundColor: "rgba(192, 75, 75, 1)",
        pointBorderColor: "rgba(192, 75, 75, 1)",
        pointBorderWidth: 1,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  };
  return { options, data, chartRef };
};
