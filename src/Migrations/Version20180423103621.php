<?php declare(strict_types = 1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20180423103621 extends AbstractMigration
{
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE classification (id INT AUTO_INCREMENT NOT NULL, partner_id INT DEFAULT NULL, title VARCHAR(255) NOT NULL, position INT NOT NULL, INDEX IDX_456BD2319393F8FE (partner_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE classification ADD CONSTRAINT FK_456BD2319393F8FE FOREIGN KEY (partner_id) REFERENCES partner (id)');
        $this->addSql('DROP TABLE partner_type');
    }

    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE partner_type (id INT AUTO_INCREMENT NOT NULL, partner_id INT DEFAULT NULL, title VARCHAR(255) NOT NULL COLLATE utf8_unicode_ci, position INT NOT NULL, INDEX IDX_DCEA64319393F8FE (partner_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE partner_type ADD CONSTRAINT FK_DCEA64319393F8FE FOREIGN KEY (partner_id) REFERENCES partner (id)');
        $this->addSql('DROP TABLE classification');
    }
}
