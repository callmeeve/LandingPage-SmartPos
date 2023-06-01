import { useRouter } from 'next/router';
import Link from 'next/link';

const Verification = () => {
    const router = useRouter();
    const { email } = router.query;

    return (
        <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-6 sm:py-12 bg-white">
            <div className="max-w-xl px-5 text-center">
                <h2 className="mb-2 text-[42px] font-bold text-blue-800">Cek Email Anda</h2>
                <p className="mb-2 text-lg font-normal text-black">
                    Kami telah mengirimkan nama pengguna dan kata sandi untuk aplikasi ke alamat email Anda{' '}
                    <span className="font-medium text-blue-800">{email}</span>.
                </p>
                <Link href="/download" className="mt-3 inline-block w-96 rounded bg-yellow-400 px-5 py-3 text-md font-semibold text-black shadow-md shadow-yellow-800/20 hover:bg-yellow-500">
                    Download App
                </Link>
            </div>
        </div>
    );
};

export default Verification;
