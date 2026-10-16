import { ArrowUpRight, ArrowRight, UserCheck } from "lucide-react";
import { visitorPathways, enquiryHref } from "@/data/brand";

export function VisitorPathways() {
  return (
    <section id="pathways" className="section-space pathways-section page-width" aria-labelledby="pathways-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Interactive Guide / Navigation</p>
          <h2 id="pathways-title">
            Where should I
            <br />
            <em>go next?</em>
          </h2>
        </div>
        <p>
          Crystal Kizor builds across architecture, media, education, furniture, and faith.
          Select who you are below to find your clearest, most direct pathway forward.
        </p>
      </div>

      <div className="pathways-grid">
        {visitorPathways.map((item, idx) => {
          const targetUrl = item.isExternal
            ? item.destination
            : item.subjectPreset
              ? enquiryHref(item.subjectPreset)
              : item.destination;

          return (
            <div key={idx} className="pathway-card">
              <div className="pathway-header">
                <span className="persona-badge">
                  <UserCheck size={13} /> {item.persona}
                </span>
                <p className="pathway-question">{item.question}</p>
              </div>

              <div className="pathway-body">
                <h3 className="pathway-title">{item.title}</h3>
                <p className="pathway-desc">{item.description}</p>
              </div>

              <div className="pathway-footer">
                <a
                  href={targetUrl}
                  {...(item.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="pathway-btn"
                >
                  <span>{item.buttonLabel}</span>
                  {item.isExternal ? <ArrowUpRight size={16} /> : <ArrowRight size={16} />}
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <div className="pathway-direct-box">
        <div className="direct-box-text">
          <h4>Not sure where your idea fits?</h4>
          <p>
            Crystal and her team regularly collaborate on multi-disciplinary projects that combine
            architecture, social impact, and media.
          </p>
        </div>
        <a href="#contact" className="editorial-outline-button direct-box-cta">
          Start an Open Conversation <ArrowRight size={15} />
        </a>
      </div>
    </section>
  );
}
