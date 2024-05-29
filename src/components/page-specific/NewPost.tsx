import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

export default function NewPost() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-2/4 bg-slate-600">Create New Post</Button>
      </DialogTrigger>
      <DialogContent className="max-w-screen-md">
        <DialogHeader>
          <DialogTitle>Create New Post</DialogTitle>
        </DialogHeader>
        <Textarea placeholder="Type your post here." />
        <div className="flex items-center space-x-2">
          <Switch id="job-post" />
          <Label htmlFor="job-post">as Job Circular</Label>
        </div>
        <DialogFooter>
          <Button type="submit">Post</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
