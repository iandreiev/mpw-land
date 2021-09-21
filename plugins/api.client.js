import Projects from "@/api/projects"
import Categories from "~/api/categories"

export default (context, inject) => {
     const factories = {
        projects: Projects(context.$axios),
        categories: Categories(context.$axios),
    }

    inject("api", factories)
}
