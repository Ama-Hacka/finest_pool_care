export default function WeeklyService() {
  return (
    <section
      id="services"
      className="py-stack-lg px-margin-mobile md:px-stack-lg max-w-container-max mx-auto"
    >
      <div className="flex flex-col md:flex-row gap-stack-lg items-center">
        {/* Left: copy */}
        <div className="md:w-1/2">
          <h2 className="font-headline-md text-headline-md text-primary mb-stack-sm">
            Professional Care, Family Values
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-stack-md leading-relaxed">
            For over two decades, our family-owned team has perfected the
            science of pool health. We don&apos;t just clean; we restore balance
            through precision chemical engineering and meticulous physical care.
          </p>

          <div className="space-y-stack-md">
            <div className="flex items-start gap-stack-sm border-l-2 border-secondary pl-stack-sm">
              <span
                className="material-symbols-outlined text-secondary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                science
              </span>
              <div>
                <h4 className="font-label-bold text-label-bold text-primary">
                  Precision Chemical Care
                </h4>
                <p className="text-on-surface-variant">
                  Sophisticated pH and chlorine balancing for skin-safe,
                  glass-like clarity.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-stack-sm border-l-2 border-secondary pl-stack-sm">
              <span
                className="material-symbols-outlined text-secondary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                family_restroom
              </span>
              <div>
                <h4 className="font-label-bold text-label-bold text-primary">
                  Palm Beach Pedigree
                </h4>
                <p className="text-on-surface-variant">
                  Family-owned reliability that understands the discretion
                  required for luxury estates.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: image grid */}
        <div className="md:w-1/2 w-full">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden shadow-sm aspect-square">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOvg7S8SQsbsAVvVslsDh_6HW4m76CS8QBOlucDPZjmWeQAwmpKm6VQ908bOQwFimQbmRk4F1fOE3VoXvQ3UrAZSpX7nY6ROAArQ11cfQO6AevRZkbVbnljTgK-NvDVukQgNIIQL7xvLn74ZYIOrUPo69gWFFGVMEIeIwSir-SemFcASw1o4UzjF64yhz-1vPU1kn_JA8Jsfs2r-rCTjD9rY510DAokIM00EmlUmal7hHhYRulFFMDkObuOSM-xw7rC0iLwR0aIuY"
                alt="Crystal-clear pool water sparkling under Florida sunlight"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-sm aspect-square mt-stack-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzErEDDKgTa2S-Z0Lj6Qwg5tiyWsORqZrT4wwBtFJEx5gZEE8faFg7k2qAENhaqJIzfbUd509OilH_hP6UHVoxdyf8s-kmS3vbyUr9pspkU-IbZ7MLzYpmiRLjfUwl6u6016XSiKSMsPfrEPdODgPQSxqyfBR3tTEqlkPN-v0pucFGe0aYgWliYetwI6X8486seCiQKg4e-elInFuCkrcVVi_RIe3ocC1x-1rgbCp2HdjdIQlUNy6yPkyFOn_iDHZ360M0tkTKVxE"
                alt="Pool technician testing water at a luxury Palm Beach estate"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
