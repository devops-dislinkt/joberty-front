terraform {
  required_providers {
    heroku = {
      source = "heroku/heroku"
      version = "5.1.0"
    }
  }
}

provider "heroku" {
  # Configuration options
}

resource "heroku_config" "gateway" {
  vars = {
    API_URL = "servers-terraform-prod.herokuapp.com"
  }
}

resource "heroku_app" "gateway" {
  name   = var.gateway_app_name
  region = "eu"
  stack  = "container"
}

resource "heroku_app_config_association" "gateway" {
  app_id = heroku_app.gateway.id

  vars = heroku_config.gateway.vars
}

resource "heroku_build" "gateway" {
  app_id = heroku_app.gateway.id

  source {
    path = "gateway"
  }
  depends_on = [
    null_resource.gateway_build
  ]
}

data "template_file" "gateway_build" {
  template = file("${path.module}/gateway/heroku.tpl")
  vars = {
    api_url = "\\\"  apiUrl:  'https://${heroku_app.servers.name}.herokuapp.com/api/server'\\\""
  }
}

resource "null_resource" "gateway_build" {
  triggers = {
    template = data.template_file.gateway_build.rendered
  }

  provisioner "local-exec" {
    command = "echo \"${data.template_file.gateway_build.rendered}\" > ${path.module}/gateway/heroku.yml"
  }
}