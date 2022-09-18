import { ROOT } from 'configs/routing/routingPaths';
import useNavigateHandler from 'features/navigation/navigationHooks';

// TODO: decompose form
/*  eslint-disable jsx-a11y/label-has-associated-control */
const AuthenticationRegisterForm = () => {
  const handleRootNavigate = useNavigateHandler(ROOT);

  return (
    <div className='flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6'>
      <div className='flex-1'>
        <div className='text-center'>
          <h2 className='text-4xl font-bold text-center text-gray-700 dark:text-white'>
            Become a member
          </h2>

          <p className='mt-3 text-gray-500 dark:text-gray-300'>Sign up to access your account</p>
        </div>

        <div className='mt-8'>
          <form>
            <div>
              <label htmlFor='name' className='block mb-2 text-sm text-gray-600 dark:text-gray-200'>
                Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Your Name'
                className='block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
              />
            </div>

            <div className='mt-6'>
              <label
                htmlFor='email'
                className='block mb-2 text-sm text-gray-600 dark:text-gray-200'
              >
                Email
              </label>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='example@example.com'
                className='block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
              />
            </div>

            <div className='mt-6'>
              <div className='flex justify-between mb-2'>
                <label htmlFor='password' className='text-sm text-gray-600 dark:text-gray-200'>
                  Password
                </label>
              </div>

              <input
                type='password'
                name='password'
                id='password'
                placeholder='Your Password'
                className='block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
              />
            </div>

            <div className='mt-6'>
              <div className='flex justify-between mb-2'>
                <label htmlFor='password-two' className='text-sm text-gray-600 dark:text-gray-200'>
                  Confirm password
                </label>
              </div>

              <input
                type='password-two'
                name='password-two'
                id='password-two'
                placeholder='Confirm Password'
                className='block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
              />
            </div>

            <div className='mt-6'>
              <button className='w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50'>
                Sign up
              </button>
            </div>
          </form>

          <p className='mt-6 text-sm text-center text-gray-400'>
            Already have an account?{' '}
            <button
              className='border-none bg-transparent text-black focus:outline-none focus:underline hover:underline'
              onClick={handleRootNavigate}
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthenticationRegisterForm;