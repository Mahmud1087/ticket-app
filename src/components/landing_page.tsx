import React from 'react';

const LandingPageComponent: React.FC = () => {
  return (
    <div className='min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900'>
      {/* Hero Section */}
      <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
        {/* Animated Background Circles */}
        <div className='absolute inset-0 overflow-hidden'>
          <div className='absolute top-20 left-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse'></div>
          <div
            className='absolute top-40 right-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse'
            style={{ animationDelay: '1s' }}
          ></div>
          <div
            className='absolute -bottom-32 left-1/3 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse'
            style={{ animationDelay: '2s' }}
          ></div>

          {/* Decorative Circles */}
          <div className='absolute top-1/4 right-1/4 w-4 h-4 bg-pink-400 rounded-full opacity-60 animate-bounce'></div>
          <div
            className='absolute top-1/3 left-1/4 w-3 h-3 bg-purple-400 rounded-full opacity-60 animate-bounce'
            style={{ animationDelay: '0.5s' }}
          ></div>
          <div
            className='absolute bottom-1/3 right-1/3 w-5 h-5 bg-blue-400 rounded-full opacity-60 animate-bounce'
            style={{ animationDelay: '1s' }}
          ></div>
          <div
            className='absolute top-1/2 left-1/2 w-2 h-2 bg-yellow-400 rounded-full opacity-60 animate-bounce'
            style={{ animationDelay: '1.5s' }}
          ></div>

          {/* Ring Decorations */}
          <div className='absolute top-1/4 left-1/3 w-32 h-32 border-2 border-purple-400 rounded-full opacity-20'></div>
          <div className='absolute bottom-1/4 right-1/4 w-40 h-40 border-2 border-pink-400 rounded-full opacity-20'></div>
        </div>

        {/* Wave SVG Background */}
        <div className='absolute bottom-0 left-0 w-full'>
          <svg viewBox='0 0 1440 320' className='w-full h-auto'>
            <path
              fill='rgba(99, 102, 241, 0.1)'
              fillOpacity='1'
              d='M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
            ></path>
            <path
              fill='rgba(147, 51, 234, 0.1)'
              fillOpacity='1'
              d='M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,213.3C960,203,1056,181,1152,165.3C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
            ></path>
          </svg>
        </div>

        {/* Hero Content */}
        <div className='relative z-10 max-w-7xl mx-auto px-6 text-center'>
          <div className='animate-fade-in'>
            <h1 className='text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight'>
              Build Your
              <span className='block bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent'>
                Dream Product
              </span>
            </h1>
            <p className='text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed'>
              Transform your ideas into reality with our cutting-edge platform.
              Experience innovation like never before.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <button className='px-8 py-4 bg-linear-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold text-lg hover:scale-105 transition-transform duration-300 shadow-2xl hover:shadow-pink-500/50'>
                Get Started Free
              </button>
              <button className='px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20'>
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='relative py-24 bg-slate-900'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-5xl font-bold text-white mb-4'>
              Powerful Features
            </h2>
            <p className='text-xl text-gray-400'>
              Everything you need to succeed
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            {/* Feature 1 */}
            <div className='group relative bg-linear-to-br from-purple-900/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-3xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105'>
              <div className='absolute inset-0 bg-linear-to-br from-purple-600/0 to-purple-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              <div className='relative'>
                <div className='w-16 h-16 bg-linear-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300'>
                  <svg
                    className='w-8 h-8 text-white'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M13 10V3L4 14h7v7l9-11h-7z'
                    />
                  </svg>
                </div>
                <h3 className='text-2xl font-bold text-white mb-4'>
                  Lightning Fast
                </h3>
                <p className='text-gray-400 leading-relaxed'>
                  Experience blazing fast performance that keeps your workflow
                  smooth and efficient.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className='group relative bg-linear-to-br from-blue-900/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-3xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:scale-105'>
              <div className='absolute inset-0 bg-linear-to-br from-blue-600/0 to-blue-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              <div className='relative'>
                <div className='w-16 h-16 bg-linear-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300'>
                  <svg
                    className='w-8 h-8 text-white'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
                    />
                  </svg>
                </div>
                <h3 className='text-2xl font-bold text-white mb-4'>
                  Secure & Private
                </h3>
                <p className='text-gray-400 leading-relaxed'>
                  Your data is protected with enterprise-grade security and
                  encryption standards.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className='group relative bg-linear-to-br from-pink-900/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-3xl border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 hover:scale-105'>
              <div className='absolute inset-0 bg-linear-to-br from-pink-600/0 to-pink-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              <div className='relative'>
                <div className='w-16 h-16 bg-linear-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300'>
                  <svg
                    className='w-8 h-8 text-white'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01'
                    />
                  </svg>
                </div>
                <h3 className='text-2xl font-bold text-white mb-4'>
                  Easy to Use
                </h3>
                <p className='text-gray-400 leading-relaxed'>
                  Intuitive design that anyone can master in minutes, not hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='relative py-24 overflow-hidden'>
        <div className='absolute inset-0'>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20'></div>
          <div className='absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20'></div>
        </div>

        <div className='relative max-w-5xl mx-auto px-6 text-center'>
          <h2 className='text-5xl md:text-6xl font-bold text-white mb-6'>
            Ready to Get Started?
          </h2>
          <p className='text-xl text-gray-300 mb-10 max-w-2xl mx-auto'>
            Join thousands of happy customers who have transformed their
            workflow
          </p>
          <button className='px-12 py-5 bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 text-white rounded-full font-bold text-xl hover:scale-110 transition-transform duration-300 shadow-2xl hover:shadow-purple-500/50'>
            Start Your Free Trial
          </button>
          <p className='text-gray-400 mt-6'>
            No credit card required • 14-day free trial
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className='relative bg-slate-950 py-12 border-t border-white/10'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='grid md:grid-cols-4 gap-8 mb-8'>
            <div>
              <h3 className='text-2xl font-bold text-white mb-4'>YourBrand</h3>
              <p className='text-gray-400'>
                Building the future, one pixel at a time.
              </p>
            </div>
            <div>
              <h4 className='text-white font-semibold mb-4'>Product</h4>
              <ul className='space-y-2'>
                <li>
                  <a
                    href='#'
                    className='text-gray-400 hover:text-white transition-colors'
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-gray-400 hover:text-white transition-colors'
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-gray-400 hover:text-white transition-colors'
                  >
                    Security
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='text-white font-semibold mb-4'>Company</h4>
              <ul className='space-y-2'>
                <li>
                  <a
                    href='#'
                    className='text-gray-400 hover:text-white transition-colors'
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-gray-400 hover:text-white transition-colors'
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-gray-400 hover:text-white transition-colors'
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='text-white font-semibold mb-4'>Connect</h4>
              <ul className='space-y-2'>
                <li>
                  <a
                    href='#'
                    className='text-gray-400 hover:text-white transition-colors'
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-gray-400 hover:text-white transition-colors'
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-gray-400 hover:text-white transition-colors'
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='pt-8 border-t border-white/10 text-center text-gray-400'>
            <p>© 2025 YourBrand. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default LandingPageComponent;
