import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
} from "@/components/ui/card"

const SignInCard = () => {
  return (
    <Card className="h-full w-full md:w-[487px] !border-none !shadow-none p-4">
      <CardHeader className="flex justify-center items-center">
        <CardTitle>Welcome back!</CardTitle>
      </CardHeader>
    </Card>
  )
}

export default SignInCard
