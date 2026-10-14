import Image from "next/image";
import { Icon } from "./ui";
export function BrowserPreview() {
  return (
    <div className="hero-visual">
      <div className="visual-caption">
        <span>THE EVERYDAY TOOLKIT</span>
        <span>01 — 07</span>
      </div>
      <div className="browser-preview">
        <div className="browser-chrome">
          <div className="window-dots">
            <i />
            <i />
            <i />
          </div>
          <span>Less clicking. More discovering.</span>
          <Icon name="spark" />
        </div>
        <div className="browser-stage">
          <div className="preview-label">
            <Image
              src="/extensions/imagus/icon.png"
              alt=""
              width={38}
              height={38}
            />
            <div>
              <strong>Imagus</strong>
              <span>See the bigger picture</span>
            </div>
            <span className="preview-live">HOVER & EXPLORE</span>
          </div>
          <Image
            className="hero-product-image"
            src="/extensions/imagus/preview.png"
            alt="Imagus hover zoom promotional artwork showing an enlarged image preview"
            width={1280}
            height={800}
            sizes="(max-width: 900px) 90vw, 48vw"
            preload
          />
          <div className="preview-bottom">
            <span>
              <Icon name="check" /> A closer look in one hover
            </span>
            <span className="keycap">Z</span>
            <span className="keycap">R</span>
            <span className="keycap">S</span>
          </div>
        </div>
      </div>
      <div className="floating-note">
        <div className="note-icon">
          <Icon name="shield" />
        </div>
        <div>
          <strong>Local by design</strong>
          <span>Your browser. Your data.</span>
        </div>
      </div>
    </div>
  );
}
