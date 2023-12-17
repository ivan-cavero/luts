import Image from 'next/image'
import IconComponent from '../../utils/Icon'
import { log } from 'next-axiom'

export default function Login () {
  log.debug('new sign-in challenge', { customerId: 32423, auth: 'session' })

  return (
    <div className="flex min-h-screen bg-backgroundDark text-textWhite">
      {/* Left Section: Login Form */}
      <div className="flex-1 flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            {/* Logo y Título de la App */}
            <div className="flex items-center justify-center">
              <Image
                src="/icon-league-of-legends.svg"
                alt="Logo"
                width={40}
                height={40}
              />
              <h2 className="text-2xl font-bold ml-2">League of Stats</h2>
            </div>
            <h2 className="mt-6 text-3xl font-bold">Log in to your Account</h2>
          </div>

          {/* Botones de Inicio de Sesión con Servicios */}
          <div className="mt-8">
            <div className="flex justify-between my-2">
              <button className="bg-buttonAccent text-buttonTextWhite p-2 rounded-md shadow-md flex items-center justify-center w-28">
                <IconComponent name="google" color="white" width="20" height="20" className="mr-2" />
                Google
              </button>
              <button className="bg-[#7289DA] text-buttonTextWhite p-2 rounded-md shadow-md flex items-center justify-center w-28">
                <IconComponent name="discord" color="white" width="20" height="20" className="mr-2" />
                Discord
              </button>
              <button className="bg-[#DB1515] text-buttonTextWhite p-2 rounded-md shadow-md flex items-center justify-center w-28">
                <IconComponent name="riot" color="white" width="20" height="20" className="mr-2" />
                Riot
              </button>
            </div>

            <div className="relative flex py-5 items-center">
              <div className="flex-grow border-t border-backgroundMediumGray"></div>
              <span className="flex-shrink mx-4 text-textLightGray">
                or continue with email
              </span>
              <div className="flex-grow border-t border-backgroundMediumGray"></div>
            </div>

            {/* Formulario de Email y Contraseña */}
            <form className="mt-4 space-y-6">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 bg-backgroundDark2 text-textWhite rounded-md border border-backgroundMediumGray"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 bg-backgroundDark2 text-textWhite rounded-md border border-backgroundMediumGray"
              />

              {/* Recordar y Olvidar Contraseña */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-accentBlue rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-textLightGray"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a href="#" className="font-medium text-accentBlue">
                    Forgot Password?
                  </a>
                </div>
              </div>

              {/* Botón de Inicio de Sesión */}
              <button
                type="submit"
                className="w-full p-3 bg-buttonAccent text-buttonTextWhite rounded-md shadow-md"
              >
                Log in
              </button>

              {/* Enlace para Crear Cuenta */}
              <div className="text-sm mt-4 text-center">
                <a href="#" className="font-medium text-accentBlue">
                  Don&apos;t have an account? Create an account
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Sección Derecha: Ilustrativa */}
      <div className="hidden lg:flex flex-1 items-center justify-center relative bg-accentBlue p-8">
        <Image
          src="/wallpaper/league-of-legends-2023-jinx-nunu-willump-gwen-teemo-4k.webp"
          alt="Background"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="max-w-md text-center relative z-10">
          <h2 className="text-2xl font-bold">
            Connect with every application.
          </h2>
          <p className="mt-2">
            Everything you need in an easily customizable dashboard.
          </p>
        </div>
      </div>
    </div>
  )
}
