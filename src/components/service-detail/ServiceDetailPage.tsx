"use client";

import type { ServiceDetailPageData } from "./serviceDetailData";
import ServiceHero from "./ServiceHero";
import ServiceExplained from "./ServiceExplained";
import ServiceWhyChoose from "./ServiceWhyChoose";
import ServiceCapabilities from "./ServiceCapabilities";
import ServiceProcess from "./ServiceProcess";
import ServiceOperations from "./ServiceOperations";
import ServicePerformance from "./ServicePerformance";
import ServiceEngineering from "./ServiceEngineering";
import ServiceRelated from "./ServiceRelated";
import ServiceCTA from "./ServiceCTA";

interface ServiceDetailPageProps {
  data: ServiceDetailPageData;
}

export default function ServiceDetailPage({ data }: ServiceDetailPageProps) {
  return (
    <>
      {/* 01 — Service Hero */}
      <ServiceHero data={data.hero} />

      {/* 02 — Service Explained */}
      <ServiceExplained data={data.explained} />

      {/* 03 — Why Choose This Service */}
      <ServiceWhyChoose data={data.whyChoose} />

      {/* 04 — Capabilities Index */}
      <ServiceCapabilities data={data.capabilities} />

      {/* 05 — Process Journey */}
      <ServiceProcess data={data.process} />

      {/* 06 — Import & Export Operations */}
      <ServiceOperations data={data.operations} />

      {/* 07 — Performance Proof or Engineering Planning */}
      {data.performance && <ServicePerformance data={data.performance} />}
      {data.engineeringPlanning && <ServiceEngineering data={data.engineeringPlanning} />}

      {/* 08 — Related Services */}
      <ServiceRelated data={data.relatedServices} />

      {/* 09 — Final CTA */}
      <ServiceCTA data={data.cta} />
    </>
  );
}
