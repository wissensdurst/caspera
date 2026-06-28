import { advisor } from "./advisor";
import { author } from "./author";
import { blogAuthor } from "./blogAuthor";
import { blogPost } from "./blogPost";
import { event } from "./event";
import { galleryAlbum } from "./galleryAlbum";
import { project } from "./project";
import { story } from "./story";
import { teamMember } from "./teamMember";

export const schemaTypes = [event, galleryAlbum, advisor, teamMember, author, story, project, blogAuthor, blogPost];
