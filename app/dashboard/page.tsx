import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-primary">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Enrolled Courses</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">3</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Completed Courses</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">1</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Hours Studied</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">24</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

