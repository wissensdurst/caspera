import { advisor } from "./advisor";
import { author } from "./author";
import { blogAuthor } from "./blogAuthor";
import { blogPost } from "./blogPost";
import { casperaPerson } from "./casperaPerson";
import { event } from "./event";
import { galleryAlbum } from "./galleryAlbum";
import { project } from "./project";
import { story } from "./story";
import { teamMember } from "./teamMember";

export const schemaTypes = [event, galleryAlbum, advisor, teamMember, casperaPerson, author, story, project, blogAuthor, blogPost];
