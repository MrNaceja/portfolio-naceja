import { Toaster } from 'react-hot-toast'
import colors from 'tailwindcss/colors'

export const ToastMessage = () => {
    return (
        <Toaster 
            position="bottom-center"
            toastOptions={{
                duration: 5000,
                style: {
                    background: colors.sky[900],
                    color: colors.gray[300]
                },
                success: {
                    style: {
                        background: colors.emerald[600],
                        boxShadow: `0 0 30px -5px ${colors.emerald[500]}80`
                    },
                    iconTheme: {
                        primary: colors.white,
                        secondary: colors.emerald[600]
                    }
                },
                error: {
                    style: {
                        background: colors.red[600],
                        boxShadow: `0 0 30px -5px ${colors.red[500]}80`
                    },
                    iconTheme: {
                        primary: colors.white,
                        secondary: colors.red[600]
                    }
                }
            }}
        />
    )
}