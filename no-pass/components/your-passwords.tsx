import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// This is a mock data structure. In a real application, you'd fetch this data from your backend.
const passwords = [
  { id: 1, website: "example.com", username: "johndoe@example.com" },
  { id: 2, website: "anothersite.com", username: "janesmith@example.com" },
]

export function YourPasswords() {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Your Passwords</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Website</TableHead>
              <TableHead>Username</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {passwords.map((password) => (
              <TableRow key={password.id}>
                <TableCell>{password.website}</TableCell>
                <TableCell>{password.username}</TableCell>
                <TableCell>
                  {/* Add actions like view, edit, delete here */}
                  View | Edit | Delete
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

